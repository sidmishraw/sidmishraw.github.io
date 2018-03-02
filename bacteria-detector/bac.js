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

        $("#loader").hide();
        $("#searchDiv").hide();
        $("#tenor").hide();
        $("#resultDiv").show();

        if (!clicked) {
          $("#nonHarmful").removeClass("show");
          $("#nonHarmful").addClass("hide");
          $("#harmful").removeClass("hide");
          $("#harmful").addClass("show");

          $("#harmText").removeClass("hide");
          $("#harmText").addClass("show");
          $("#nonHarmText").removeClass("show");
          $("#nonHarmText").addClass("hide");
        } else {
          $("#nonHarmful").removeClass("hide");
          $("#nonHarmful").addClass("show");
          $("#harmful").removeClass("show");
          $("#harmful").addClass("hide");

          $("#harmText").removeClass("show");
          $("#harmText").addClass("hide");
          $("#nonHarmText").removeClass("hide");
          $("#nonHarmText").addClass("show");
        }

        clicked = !clicked;
      }, 2000);
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
      $("#tenor").show();
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
