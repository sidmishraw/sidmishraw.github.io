$(document).ready(function() {
  var clicked = false;

  $("#resultDiv").hide();
  $("#loader").hide();

  $("#searchButton")
    .unbind("click")
    .bind("click", function(event) {
      event.preventDefault();
      $("#loader").show();
      setTimeout(function() {
        $("body").removeClass("appback");
        if (!clicked) {
          $("body").removeClass("bac_not_found");
          $("body").addClass("bac_found");
        } else {
          $("body").removeClass("bac_found");
          $("body").addClass("bac_not_found");
        }
        clicked = !clicked;
        $("#loader").hide();
        $("#searchDiv").hide();
        $("#resultDiv").show();
      }, 5000);
    });

  $("#doneButton")
    .unbind("click")
    .bind("click", function(event) {
      event.preventDefault();
      $("#resultDiv").hide();
      $("body").removeClass("bac_found");
      $("body").removeClass("bac_not_found");
      $("body").addClass("appback");
      $("#searchDiv").show();
    });

  // Disable scrolling.
  document.ontouchmove = function(e) {
    e.preventDefault();
  };

  // Enable scrolling.
  document.ontouchmove = function(e) {
    return true;
  };
});
