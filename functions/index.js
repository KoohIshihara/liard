const cors = require('cors')({origin: true});

const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp({
  apiKey: "AIzaSyDMeYUXOE4QeNacfgsySQ7bBb2BBGFR7V4",
  authDomain: "liard-fike.firebaseapp.com",
  databaseURL: "https://liard-fike.firebaseio.com",
  projectId: "liard-fike",
  storageBucket: "liard-fike.appspot.com",
  messagingSenderId: "439405506551",
});

const db = admin.firestore();

db.settings({
  timestampsInSnapshots: true
});

const app_domain = 'liard-fike.firebaseapp.com';
const OGP_IMG_WIDTH = 1200;
const OGP_IMG_HEIGHT = 630;

exports.article = functions.https.onRequest((req, res) => {
  console.log('path:', req.path);
  cors(req, res, async function() {

    console.log('path:', req.path);

    var articleId = req.path.split('/')[2];
      console.log('articleId:', articleId);

      var articleDoc = await db.collection('articles').doc(articleId).get();

      if(articleDoc.exists){
        var article = articleDoc.data();
        console.log('article:', article);

        var html = createHtml(article, articleId);
        console.log('html', html);

        //res.set('Cache-Control', 'public, max-age=600, s-maxage=600');
        res.status(200).end(html);
      }else{
        var redirectHtml = `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width,initial-scale=1.0">
            </head>
            <body> 
              <script type="text/javascript">window.location="https://${app_domain}";</script>
            </body>
          </html>
        `;
        res.status(200).end(html);

      }

    return;
  }); // cors
});


const createHtml = (article, articleId) => {
  const SITEURL = `https://${app_domain}`;
  const PAGEURL = `${SITEURL}/article/${articleId}`;
  const TITLE = article.title;
  const DESCRIPTION = article.subTitle;
  var IMG = article.topImg;
  if(IMG=='') IMG = 'https://firebasestorage.googleapis.com/v0/b/liard-fike.appspot.com/o/LIARD-logo.png?alt=media&token=333c15e6-0c92-4ba3-91f7-ee5f350d1fb2';

  return `<!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width,initial-scale=1.0">
              <title>TITLE</title>
              <meta property="og:title" content="${TITLE}">
              <meta property="og:image" content="${IMG}">
              <meta property="og:image:width" content="${OGP_IMG_WIDTH}">
              <meta property="og:image:height" content="${OGP_IMG_HEIGHT}">
              <meta property="og:description" content="${DESCRIPTION}">
              <meta property="og:url" content="${PAGEURL}">
              <meta property="og:type" content="article">
              <meta property="og:site_name" content="LIARD">
              <meta name="twitter:site" content="${SITEURL}">
              <meta name="twitter:card" content="summary_large_image">
              <meta name="twitter:title" content="${TITLE}">
              <meta name="twitter:image" content="${IMG}">
              <meta name="twitter:description" content="${DESCRIPTION}">
            </head>
            <body>
              <script type="text/javascript">window.location="/#article/${articleId}";</script>
            </body>
          </html>
          `;
}

