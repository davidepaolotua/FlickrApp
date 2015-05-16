FlickrApp.filter('photo_show', function(){
  return function(the_element, type){
    return urlify(the_element, "thumbnail")   
  }
})

FlickrApp.filter('strip_html', function() {
 return function(text_to_be_stripped) {
    return String(text_to_be_stripped).replace(/<[^>]+>/gm, '');
  };
});
