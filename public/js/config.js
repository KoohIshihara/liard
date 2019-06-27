var config = {
  apiKey: "AIzaSyDMeYUXOE4QeNacfgsySQ7bBb2BBGFR7V4",
  authDomain: "liard-fike.firebaseapp.com",
  databaseURL: "https://liard-fike.firebaseio.com",
  projectId: "liard-fike",
  storageBucket: "liard-fike.appspot.com",
  messagingSenderId: "439405506551",
};

firebase.initializeApp(config);

var session = {};
var service = {};

service.db = firebase.firestore();