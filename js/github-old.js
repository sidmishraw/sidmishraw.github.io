/**
* github.js
* @author Sidharth Mishra
* @description Fetches my current projects(repo) from GitHub and renders them in GitHub's pinned repo like fashion.
* @created Tue Oct 31 2017 16:08:55 GMT-0700 (PDT)
* @copyright 2017 Sidharth Mishra
* @last-modified Tue Oct 31 2017 20:28:46 GMT-0700 (PDT)
*/


"use strict";

$.noConflict();

/**
 * Call the render function only when on the projects page!
 */
if (window.location.href.match(/.*projects\.{1}html/i) &&
  (window.location.href.match(/.*projects\.{1}html/i).length == 1)) {
  startLoader();
  fetchGitHubProjects();
}

/**
 * Fetch the Sid's projects(repos) from GitHub
 */
function fetchGitHubProjects() {
  let user = "sidmishraw";
  jQuery.ajax({
    url: `https://api.github.com/users/${user}/repos?per_page=1000`,
    jsonp: true,
    method: "GET",
    dataType: "json",
    success: function (res) {
      if (typeof res === "object") {
        // res is an Array of objects
        let projects = res.map(constructProjects);
        console.log(projects);
        renderGitHubProjects(projects);
      } else {
        console.log("Not a valid response, please contact Sid :)");
      }
    },
    error: function (e, status) {
      console.log(e, status);
    }
  });
}

/**
 * Makes the project info I want to display in my projects.html page.
 * 
 * @param {object} fullProjectInfo The complete information about the project repo obtained from GitHub
 */
function constructProjects(fullProjectInfo) {
  let myProjectInfo = {
    "name": fullProjectInfo["name"],
    "description": fullProjectInfo["description"],
    "url": fullProjectInfo["html_url"],
    "language": fullProjectInfo["language"],
    "udate": new Date(fullProjectInfo["updated_at"]),
    "isFork": fullProjectInfo["fork"]
  };
  return myProjectInfo;
}

/**
 * Renders Sid's GitHub projects xD
 */
function renderGitHubProjects(projects) {
  jQuery("#languagesIDabbleIn").html(
    `<ol class="pinned-repos-list mb-4">` +
    myLanguages(projects) +
    `</ol>`
  );
  jQuery("#projectsList").html(
    `<ol class="pinned-repos-list mb-4">` +
    projectCards(sortByDate(projects)) +
    `</ol>`
  );
  stopLoader();
}

/**
 * Sort the projects by the last date I updated them!
 * 
 * @param {[project]} projects my list of projects with reduced information
 */
function sortByDate(projects) {
  return projects.sort((prj1, prj2) => prj2["udate"] - prj1["udate"]);
}

/**
 * Makes the project string
 * @param {[project]} projects The list of my projects
 */
function projectCards(projects) {
  let cardsString = "";
  for (let i = 0; i < projects.length; i++) {
    cardsString += projectCard(projects[i]);
  }
  return cardsString;
}

/**
 * <li class="pinned-repo-item  p-3 mb-3 border border-gray-dark rounded-1">
          <div class="pinned-repo-item-content">
            <span class="d-block position-relative">
              <a href="" class="text-bold">
                <span class="repo js-repo" title="X">X</span>
              </a>
            </span>
            <p class="pinned-repo-desc text-gray text-small d-block mt-2 mb-3">Sid</p>
            <p class="mb-0 f6 text-gray">
              <span class="repo-language-color pinned-repo-meta" style="background-color:#b07219;"></span>
              Java
            </p>
          </div>
        </li>
 */
function projectCard(project) {
  let cardString = `
  <li class="pinned-repo-item  p-3 mb-3 border border-gray-dark rounded-1">
    <div class="pinned-repo-item-content">
      <span class="d-block position-relative">
        <a href="${project["url"]}" class="text-bold">
          <span class="repo js-repo" title="${project[name]}">${project["name"]}</span>
        </a>
      </span>
      ${project["isFork"] ? `<p class="text-gray text-small mb-2">Forked</p>` : ``}
      <p class="pinned-repo-desc text-gray text-small d-block mt-2 mb-3">${project["description"] ? project["description"] : ""}</p>
      <p class="mb-0 f6 text-gray">
        <span class="repo-language-color pinned-repo-meta" style="background-color:${detectLanguageColor(project["language"])};"></span>
        ${project["language"] ? project["language"] : ""}
      </p>
    </div>
  </li>`;
  return cardString;
}

/**
 * Fetches the color for a language
 * @param {string} language The name of the language in lowercase
 */
function detectLanguageColor(language) {

  if (language) {
    language = language.toLowerCase();
  } else {
    return "#ffffff";
  }

  switch (language) {

    case "java": {
      return `#b07219`;
    }

    case "python": {
      return `#3572A5`;
    }

    case "c++": {
      return `#f34b7d`;
    }

    case "haskell": {
      return "#5e5086";
    }

    case "javascript": {
      return "#f1e05a";
    }

    case "scala": {
      return "#c22d40";
    }

    case "clojure": {
      return "#db5855";
    }

    case "shell": {
      return "#89e051";
    }

    case "batchfile": {
      return "#C1F12E";
    }

    case "c": {
      return "#555555";
    }

    case "vim script": {
      return "#199f4b";
    }

    case "go": {
      return "#375eab";
    }

    case "rust": {
      return "#dea584";
    }

    case "swift": {
      return "#ffac45";
    }

    default: {
      return "#f1e05a";
    }
  }
}

/**
 * List of all the languages I like to dabble in!
 * 
 * @param {*} projects My list of projects
 */
function myLanguages(projects) {
  let languagesString = "";
  let langs = projects.map((prj) => prj["language"]);
  let l = [];
  for (let i = 0; i < langs.length; i++) {
    if (langs[i] && l.indexOf(langs[i]) == -1 && langs[i].length > 0) {
      l.push(langs[i]);
    }
  }
  languagesString = l.join(", ");
  return languagesString;
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