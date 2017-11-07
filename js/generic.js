/**
* generic.js
* @author Sidharth Mishra
* @description This is the generic js, takes care of the bookkeeping stuff
* @created Sun Nov 05 2017 00:28:00 GMT-0700 (PDT)
* @copyright 2017 Sidharth Mishra
* @last-modified Sun Nov 05 2017 00:28:00 GMT-0700 (PDT)
*/

$.noConflict();

//# keeping track of last page
let lastPage = null;
//# keeping track of last page

jQuery("document").ready(function() {
  let lastPartOfURL = window.location.href.split("/").splice(3);

  switch (lastPartOfURL.length) {
    case 0: {
      if (!lastPage) {
        lastPage = jQuery("ul.hide-on-med-and-down>li>a[href='./']").parent();
      } else {
        jQuery(lastPage).removeClass("active");
      }
      // the home page
      jQuery("ul.hide-on-med-and-down>li>a[href='./']")
        .parent()
        .addClass("active"); // make HOME active
      break;
    }
    case 1: {
      if (!lastPage) {
        lastPage = jQuery(`ul.hide-on-med-and-down>li>a[href='./${lastPartOfURL[0]}']`).parent();
      } else {
        jQuery(lastPage).removeClass("active");
      }
      jQuery(`ul.hide-on-med-and-down>li>a[href='./${lastPartOfURL[0]}']`)
        .parent()
        .addClass("active");
      break;
    }
    case 2: {
      // archives or posts
      // archive is one directory up
      if (!lastPage) {
        lastPage = jQuery(`ul.hide-on-med-and-down>li>a[href='../archive.html']`).parent();
      } else {
        jQuery(lastPage).removeClass("active");
      }
      jQuery(`ul.hide-on-med-and-down>li>a[href='../archive.html']`)
        .parent()
        .addClass("active");
      break;
    }
  }
});
