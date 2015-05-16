FlickrApp.service('flckrUtilities',['$http',function ($http) {

  coalesce=function(element, placeholder) {
    return (element ? element : placeholder)
  }

  urlify=function(element, type){
    newType = (type=="thumbnail") ? "_q" : ""
    return "https://farm" + element.farm + ".staticflickr.com/" + element.server + "/" + element.id+"_"+element.secret+newType+".jpg"
  }

  validate_page_number=function(number_to_validate, min_range, max_range){
    real_number=(number_to_validate <min_range) ? min_range : number_to_validate
    real_number=(number_to_validate >max_range) ? max_range : number_to_validate
    return real_number
  }

  my_description=function(){
    return "Description is not available due to - " +["network down, IP packets delivered via UPS",
      "network packets travelling uphill (use a carrier pigeon).",
      "somebody was calculating pi on the server.",
      "The math co-processor had an overflow error that leaked out and shorted the RAM.",
      "Change in Earth's rotational speed.",
      "Cosmic ray particles crashed through the hard disk platter.",
      "Little hamster in running wheel had coronary; waiting for replacement to be Fedexed from Wyoming.",
      "not properly grounded, please bury computer.",
      "bit bucket overflow.",
      "knot in cables caused data stream to become twisted and kinked.",
      "Support staff hung over, send aspirin and come back LATER.",
      "Someone is standing on the ethernet cable, causing a kink in the cable.",
      "Power company testing new voltage spike (creation) equipment.",
      "your keyboard's space bar is generating spurious keycodes.",
      "Sticky bits on disk.",
      "Daemons loose in system.",
      "disks spinning backwards - toggle the hemisphere jumper.",
      "Zombie processes haunting the computer",
      "/pub/lunch",
      "runaway cat on system.",
      "Me no internet, only janitor, me just wax floors."][Math.floor(Math.random() * 21)];
  }

return {
    urlify: urlify,
    coalesce: coalesce,
    validate_page_number: validate_page_number,
    my_description: my_description
  }

}])