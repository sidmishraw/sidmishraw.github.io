$(document).ready(function() {
  $("#resultDiv").hide();

  $("#searchButton")
    .unbind("click")
    .bind("click", function(event) {
      event.preventDefault();
      $("#searchDiv").hide();
      $("#resultDiv").show();
    });

  $("#doneButton")
    .unbind("click")
    .bind("click", function(event) {
      event.preventDefault();
      $("#resultDiv").hide();
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
