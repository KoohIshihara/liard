var provider = new firebase.auth.FacebookAuthProvider();

// Initialize
var service = {};
service.db = firebase.firestore();
service.providers = {
  facebook: new firebase.auth.FacebookAuthProvider()
};

// ログイン
var loginWithFacebook = function() {
  var provider = service.providers.facebook;
  firebase.auth().signInWithRedirect(provider);
}

// ページ（index.html）が読み込まれた時に発火
// ログインボタンを押して認証した時用
firebase.auth().getRedirectResult().then(function(result) {

  console.log('Redirect Handler', result);

  if (result.credential) {
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var token = result.credential.accessToken;
    session.token = token;

    //window.location.href = '/#top';
  }
  // The signed-in user info.
  var user = result.user;
  loginHandler(user);

}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;

  console.log('error', error);
});

// ページが読み込まれた時など、認証状態の変化時のステータス管理
firebase.auth().onAuthStateChanged(async function(user) {
  
  loginHandler(user);

  setTimeout(function(){
    $('#loading').fadeOut(400);
    $('#loadingForModal').fadeOut(400);
  }, 1600);

  riot.finishAuthChecked = false;
  clearTimeout(riot.authCheckTimer);
  riot.authCheckTimer = setTimeout(function(){
    riot.finishAuthChecked = true;
  }, 1600);

  setTimeout(function(){
    $('#loading').fadeOut(400);
    $('#loadingForModal').fadeOut(400);
  }, 1600);
    
});


var loginHandler = async (user) => {
  
  if(user==null){
    session.user = user;

    return;
  }

  var userExist = await service.db.collection('users').doc(user.uid).get();
  var urlHash = location.hash.split('#')[1];

  // userが存在しなかったら（サインアップ処理）
  if(!(userExist.exists)){

    var userObj = {
      uid: user.uid,
      name: user.displayName,
      email: user.email,
      photoUrl: user.photoURL,
      lastSignInTime: user.metadata.lastSignInTime,
      creationTime: user.metadata.creationTime,
      completeTutorial: false
    };

    await service.db.collection("users")
      .doc(user.uid)
      .set(userObj);

    session.user = userObj;
    session.userIsNew = true;
    
    if(urlHash=='sign-up'){
      window.location.href = `/#user/${session.user.uid}`;
    }
    
  }else{
    session.userIsNew = false;
    session.user = userExist.data();

    var docId = userExist.id;
    service.db.collection('users').doc(userExist.id).update({lastSignInTime: new Date()});
    
    if(urlHash=='sign-up' || urlHash=='sign-in'){
      window.location.href = `/#user/${session.user.uid}`;
    }
    // window.location.href = `/#user/${session.user.uid}`;
  }
  
}


var logout = function() {
  
  riot.update();

  firebase.auth().signOut().then(function() {
    // Sign-out successful.
    console.log('Sign Out');
    window.location.href = './#sign-in';
  }).catch(function(error) {
    // An error happened.
    window.location.href = './#sign-in';
  });
}