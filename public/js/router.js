
riot.history = [];

/*
riot.route('/preview/*', function(tagName) {
  riot.history.push(location.hash);
  riot.preventReload = true;
  riot.mount('header', 'util-header', {status: 'modal'});
  riot.mount('modal-content', 'page-article', {id: tagName});
  riot.update();
});

riot.route('/article_settings/*', function(tagName) {
  riot.history.push(location.hash);
  riot.preventReload = true;
  riot.mount('header', 'util-header', {status: 'modal', label: 'Publish Settings'});
  riot.mount('modal-content', 'page-article-settings', {id: tagName});
  riot.update();
});

riot.route('/article/*', function(tagName) {
  riot.history.push(location.hash);
  riot.preventReload = true;
  riot.mount('header', 'util-header', {status: 'article_modal'});
  riot.mount('modal-content', 'page-article', {id: tagName});
  riot.update();

  //history.replaceState('','',`/article/${tagName}`);
});



riot.route('/user/*', function(tagName) {
  riot.history.push(location.hash);

  if(riot.enableFadeIn) $('content').removeClass('not-opacity');

  riot.enableFadeIn = true;

  $(document).trigger("custom:close");

  setTimeout(function() {
    if(!riot.preventReload){
      $('content').addClass('not-opacity');
      riot.mount('content', 'page-user', {uid: tagName});
    }
    riot.mount('header', 'util-header', {status: 'normal'});
    riot.update();

    riot.preventReload = false;
  }, 400);
});

riot.route('/edit/*', function(tagName) {
  riot.history.push(location.hash);

  if(riot.enableFadeIn) $('content').removeClass('not-opacity');

  riot.enableFadeIn = true;

  $(document).trigger("custom:close");

  setTimeout(function() {
    if(!riot.preventReload){
      $('content').addClass('not-opacity');
      riot.mount('content', 'page-edit', {id: tagName});
    }
    riot.mount('header', 'util-header', {status: 'edit'});
    riot.update();

    riot.preventReload = false;
  }, 400);
});


riot.route('/sign-in', function(tagName) {
  riot.history.push(location.hash);

  if(riot.enableFadeIn) $('content').removeClass('not-opacity');

  riot.enableFadeIn = true;

  $(document).trigger("custom:close");

  setTimeout(function() {
    $('content').addClass('not-opacity');
    riot.mount('header', 'util-header', {status: 'normal'});
    riot.mount('content', 'page-sign-in', {content: 'content'});
    riot.update();
  }, 400);
});

riot.route('/sign-up', function(tagName) {
  riot.history.push(location.hash);

  if(riot.enableFadeIn) $('content').removeClass('not-opacity');

  riot.enableFadeIn = true;

  $(document).trigger("custom:close");

  setTimeout(function() {
    $('content').addClass('not-opacity');
    riot.mount('header', 'util-header', {status: 'normal'});
    riot.mount('content', 'page-sign-up', {content: 'content'});
    riot.update();
  }, 400);
});

riot.route(function() {
  riot.history.push(location.hash);
  
  if(riot.enableFadeIn) $('content').removeClass('not-opacity');

  riot.enableFadeIn = true;

  $(document).trigger("custom:close");

  setTimeout(function() {
    if(!riot.preventReload){
      $('content').addClass('not-opacity');
      riot.mount('content', 'page-top', {content: 'content'});
    }
    riot.mount('header', 'util-header', {status: 'normal'});
    riot.update();

    riot.preventReload = false;
  }, 400);
});


riot.route.start(true);

var tags = riot.mount('*');

*/



router = route.create();
//route.base('/');

router('/preview/*', function(tagName) {
  riot.history.push(location.hash);
  riot.preventReload = true;
  riot.mount('header', 'util-header', {status: 'modal'});
  riot.mount('modal-content', 'page-article', {id: tagName});
  riot.update();
});

router('/article_settings/*', function(tagName) {
  riot.history.push(location.hash);
  riot.preventReload = true;
  riot.mount('header', 'util-header', {status: 'modal', label: 'Publish Settings'});
  riot.mount('modal-content', 'page-article-settings', {id: tagName});
  riot.update();
});

router('/article/*', function(tagName) {
  riot.history.push(location.hash);
  riot.preventReload = true;
  riot.mount('header', 'util-header', {status: 'article_modal'});
  riot.mount('modal-content', 'page-article', {id: tagName});
  riot.update();

  history.replaceState('','', location.hash.split('#')[1]);
});



router('/user/*', function(tagName) {
  riot.history.push(location.hash);

  if(riot.enableFadeIn) $('content').removeClass('not-opacity');

  riot.enableFadeIn = true;

  $(document).trigger("custom:close");

  setTimeout(function() {
    if(!riot.preventReload){
      $('content').addClass('not-opacity');
      riot.mount('content', 'page-user', {uid: tagName});
    }
    riot.mount('header', 'util-header', {status: 'normal'});
    riot.update();

    riot.preventReload = false;
  }, 400);
});

router('/edit/*', function(tagName) {
  riot.history.push(location.hash);

  if(riot.enableFadeIn) $('content').removeClass('not-opacity');

  riot.enableFadeIn = true;

  $(document).trigger("custom:close");

  setTimeout(function() {
    if(!riot.preventReload){
      $('content').addClass('not-opacity');
      riot.mount('content', 'page-edit', {id: tagName});
    }
    riot.mount('header', 'util-header', {status: 'edit'});
    riot.update();

    riot.preventReload = false;
  }, 400);
});


router('/sign-in', function(tagName) {
  riot.history.push(location.hash);

  if(riot.enableFadeIn) $('content').removeClass('not-opacity');

  riot.enableFadeIn = true;

  $(document).trigger("custom:close");

  setTimeout(function() {
    $('content').addClass('not-opacity');
    riot.mount('header', 'util-header', {status: 'normal'});
    riot.mount('content', 'page-sign-in', {content: 'content'});
    riot.update();
  }, 400);
});

router('/sign-up', function(tagName) {
  riot.history.push(location.hash);

  if(riot.enableFadeIn) $('content').removeClass('not-opacity');

  riot.enableFadeIn = true;

  $(document).trigger("custom:close");

  setTimeout(function() {
    $('content').addClass('not-opacity');
    riot.mount('header', 'util-header', {status: 'normal'});
    riot.mount('content', 'page-sign-up', {content: 'content'});
    riot.update();
  }, 400);
});

router('', function() {
  
  riot.history.push(location.hash);
  
  if(riot.enableFadeIn) $('content').removeClass('not-opacity');

  riot.enableFadeIn = true;

  $(document).trigger("custom:close");

  setTimeout(function() {
    if(!riot.preventReload){
      $('content').addClass('not-opacity');
      riot.mount('content', 'page-top', {content: 'content'});
    }
    riot.mount('header', 'util-header', {status: 'normal'});
    riot.update();

    riot.preventReload = false;
  }, 400);
})


route.start(true);

var tags = riot.mount('*');





/*
var routeTo = function(hash, e){

  if(location.pathname.split('/')[1]=='article'){
    location.href = `${location.host}/${hash}`;
    return;
  }

  location.hash = hash;

}
*/




