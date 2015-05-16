FlickrApp.factory('flickrFactory', function($resource, $q) {
  var photos = $resource('https://api.flickr.com/services/rest/', 
      {    format: 'json', 
           jsoncallback: 'JSON_CALLBACK'           
       }, 
      { 'query': { method: 'JSONP' } });

    search=function(tags, mode, current_page) {
      var q = $q.defer();
      my_query={method: "flickr.photos.getRecent", 
                per_page: 10, 
                api_key:"19b604a7c16a5b80457bf6745d1cccae", 
                page: current_page}
      if (tags) {
        my_query.method= "flickr.photos.search"
        my_query.tags= tags
        my_query.tag_mode= mode
      }
      photos.query(my_query        
        , function(resp) {
            q.resolve(resp);}
        , function(err) {
            q.reject(err);}
        )
      return q.promise;
    }

    getInfo=function(id, secret) {
      var q = $q.defer();
      my_query={method: "flickr.photos.getinfo", photo_id: id, api_key:"19b604a7c16a5b80457bf6745d1cccae", secret: secret}
      photos.query(my_query        
        , function(resp) {
            q.resolve(resp);}
        , function(err) {
            q.reject(err);}
        )
      return q.promise;
    }

  return {
    search: search,
    getInfo: getInfo    
  }

})
      

