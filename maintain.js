var addCurated = async function(){
  var articleDocs = await service.db.collection('articles').get().then(function(d){
    return d.docs.map(function(e){ var data = e.data(); data.id = e.id; return data; })
  });
  
  for(var i=0; i<articleDocs.length; i++){
    console.log(articleDocs[i]);
  articleDocs[i].curated = false;
    service.db.collection('articles').doc(articleDocs[i].id).set(articleDocs[i]);
  }
}