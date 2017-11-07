"use strict";

/**
 * Call the render function only when on the projects page!
 */
if (
  window.location.href.match(/.*projects\.{1}html/i) &&
  window.location.href.match(/.*projects\.{1}html/i).length == 1
) {
  startLoader();
  //# user's rendering logic
  githubLike.GitHubCards.render("sidmishraw", "projectsList", () => {
    //# languages carousel
    new gitlangcards.GitHubLanguageColors().renderOnScreen("sidmishraw", "languagesIDabbleIn", () => {
      console.log("Done");
    });
    //# languages carousel
    stopLoader();
  });
  //# user's rendering logic
}

/**
 * Start loader
 */
function startLoader() {
  jQuery(".content").hide();
  jQuery(".loader").show();
}

/**
 * Stop loader
 */
function stopLoader() {
  jQuery(".loader").hide();
  jQuery(".content").show();
}
