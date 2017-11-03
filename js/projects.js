"use strict";

jQuery.noConflict();

/**
 * Call the render function only when on the projects page!
 */
if (window.location.href.match(/.*projects\.{1}html/i) &&
  (window.location.href.match(/.*projects\.{1}html/i).length == 1)) {
  startLoader();
  //# user's rendering logic
  githubLike.GitHubCards.render("sidmishraw", "projectsList", () => {
    /// WIP, will make a language carousel thingy
    jQuery("#languagesIDabbleIn").html(
      `<ol class="pinned-repos-list mb-4">` +
      githubLike.GitHubCards.getMyLanguages() +
      `</ol>`
    );
    /// WIP, will make a language carousel thingy
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