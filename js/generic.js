/**
* generic.js
* @author Sidharth Mishra
* @description This is the generic js, takes care of the bookkeeping stuff
* @created Sun Nov 05 2017 00:28:00 GMT-0700 (PDT)
* @copyright 2017 Sidharth Mishra
* @last-modified Sun Nov 05 2017 00:28:00 GMT-0700 (PDT)
*/

$.noConflict();

jQuery("document").ready(function() {
  let lastPartOfURL = window.location.href
    .split("/")
    .splice(3)
    .filter(x => x.length > 0);

  switch (lastPartOfURL.length) {
    case 0: {
      // the home page
      jQuery("#home")
        .parent()
        .addClass("active"); // make HOME active
      break;
    }
    case 1: {
      jQuery(`#${lastPartOfURL[0].split(".")[0]}`)
        .parent()
        .addClass("active");
      break;
    }
    case 2: {
      // archives or posts
      // archive is one directory up
      jQuery("#archive")
        .parent()
        .addClass("active");
      break;
    }
  }
});
