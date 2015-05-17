# FlickrApp
Simple Single Page Application using the Flickr API


## How to use
Just open index.html for a simple demo.

Check for a quick list of features: [screenshot](http://oi57.tinypic.com/2ni6ybb.jpg)


##Notes
I had to change the layout I was suggested because the public feed was not enough for my purposes (mainly, it does not allow for and/or tag query and for wasteless pagination.)

So i resorted to use the photo.search and photo.getrecent calls, but they did not contain all the info i needed (like the description), the only way to get the info I needed was to resort to using the photo.getInfo function for each photo, but then, it meant performing an N+1 search.. technically feasible but kind of ill-behavioured and would pose an unnecessary load (usually, users do not watch in detail all photos in a stream.)

So I opted for letting users choose which images to get details from.

However, this gave me also the possibility to choose the image size, so the thumbnails I am showing are low quality ones, in order to speed up loading :)


##Possible improvements
- move the personal apikey to a safer place..
- implement some form of caching
- implement the "search by everything" feature. not technically difficult but it seems I'd need to put my registered info in..
- implement the pagination for the big image as well


###Comments
- First time using angular.js, not a bad impression but still a lot to understand from it
- bonus points if you can tell me where my description sentences come from :)
