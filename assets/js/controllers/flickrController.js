FlickrApp.controller('flickrController',['flickrFactory', 'flckrUtilities','$http' ,function (flickrFactory, util) {
  var self=this;
  self.selected=true;
  self.loading=false
  self.photos =[];
  self.current_page=1
  self.search_object={}
  self.search_object.query_type="any"
  
  self.current_photo={ author: "Davide Tua"
                        ,location: "assets/images/hello.jpg"
                        ,title: "Nice to Meet you!"
                        ,description: util.my_description()
                        ,tags: "angular.js photos flickr"
                      }
  

  self.show =function(id, secret) {
    flickrFactory.getInfo(id, secret)
                 .then(function(resp) {
                    self.beautify(resp)
                  })
  }


  self.search = function() {
    self.loading=true
    self.current_page=util.validate_page_number(self.current_page, 1, self.total_pages)
    flickrFactory.search(self.search_object.query_tags,
                         self.search_object.query_type,
                         self.current_page)
                 .then(function(resp) {
                    self.total_pages = resp.photos.pages
                    self.photos =resp.photos.photo;
                    self.loading=false
                  })
    }


  self.change_page = function(amount) {
	  self.current_page+=amount
    self.search()
  }  


  self.beautify=function(resp){
    self.current_photo.location=util.urlify(resp.photo)
    self.current_photo.author=util.coalesce(resp.photo.owner.realname, resp.photo.owner.username);
    self.current_photo.username=resp.photo.owner.username;    
    self.current_photo.title=util.coalesce(resp.photo.title._content, "untitled");
    self.current_photo.description=util.coalesce(resp.photo.description._content,"No description");
    self.current_photo.author_page="https://www.flickr.com/photos/" + resp.photo.owner.nsid
    self.current_photo.tags=""
    for (index = 0; index < resp.photo.tags.tag.length; index++) {
      self.current_photo.tags += resp.photo.tags.tag[index]._content+ " ";
    } 
  }


  
  self.search()


}]);
