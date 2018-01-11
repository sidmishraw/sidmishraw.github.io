/**
 * grapher.js
 *
 * @author Sidharth Mishra
 * @description Graph creation library.
 * @created Thu Jan 04 2018 15:04:14 GMT-0800 (PST)
 * @copyright 2017 Sidharth Mishra
 * @last-modified Thu Jan 11 2018 10:22:07 GMT-0800 (PST)
 */

let W = 1080; // default width
let H = 1080; // default height
let R = 60; // radius of the circle centered at base URL (W/2, H/2)
let baseURL = "https://sidmishraw.github.io"; // default base URL

function go(url) {
  baseURL = url;
  setup();
  redraw();
}

/**
 * Setup code.
 */
function setup() {
  createCanvas(W, H);
  // background("#000000");
  noLoop();
}

/**
 * Drawing code.
 */
function draw() {
  findNeighbors(baseURL);
}

/**
 * Prepares the points and draws the graph.
 *
 * @param {string[]} neighbors The URLs of the neighbors.
 */
function prepareGraph(neighbors) {
  //
  // Co-ordinates of the baseURL: center.
  //
  let centerX = W / 2;
  let centerY = H / 2;
  stroke("#ff9800");
  fill("#ff9800");
  point(centerX, centerY);
  textAlign(CENTER, CENTER);
  text(baseURL, centerX, centerY);

  //
  // Compute the points of the neighbors.
  //
  let gMap = neighbors.map((n, index) => {
    let theta = 2 * index * Math.PI / neighbors.length;
    let radius = R + 18 * index;
    let xy = getCircleXY(centerX, centerY, radius, theta);
    return {
      url: n, // the text to display is the URL itself
      radius: radius, // the radius
      theta: theta, // the angle of rotation
      x: xy[0], // a X of a point on the circumference of the circle centered at (centerX,centerY)
      y: xy[1] // a Y of a point on the circumference of the circle centered at (centerX,centerY)
    };
  });

  //
  // Draw the graph.
  //
  drawGraph(centerX, centerY, gMap); // draw the graph
}

/**
 * Draws the lines connecting base to its neighbors.
 *
 * @param {number} f center's X.
 * @param {number} g center's Y.
 * @param {{url:string, radius:number, theta:number, x:number, y:number}[]} dimMap The object containing all info about the neighbor.
 */
function drawGraph(f, g, dimMap) {
  dimMap.forEach(o => {
    //
    // Line.
    //
    stroke("#2196F3");
    line(f, g, o.x, o.y);

    //
    // Text.
    //
    textAlign(CENTER, CENTER);
    point(o.x, o.y);
    stroke("#2196F3");
    fill("#2196F3");
    text(o.url, o.x, o.y);
  });
}

/**
 * Fetches the x co-ordinate on the circle.
 *
 * @param {number} f The x co-ordinate of the center
 * @param {number} g The y co-ordinate of the center
 * @param {number} r The radius
 * @param {number} theta angle in radians.
 * @returns {number[]} length 2, x at 0 and y at 1.
 */
function getCircleXY(f, g, r, theta) {
  let x = f + r * Math.cos(theta);
  let y = g + r * Math.sin(theta);
  return [x, y];
}

/**
 * Given the baseURL or seed URL, finds all the URLs immediately reachable from this URL.
 * @param {string} baseURL The seed URL to begin looking from.
 * @param {string} urlBegin The URLs to follow.
 */
function findNeighbors(baseURL, urlBegin) {
  fetch(baseURL, {
    method: "GET",
    cache: "default"
  })
    .then(response => {
      console.log(`${response.status}::${response.statusText}`);
      console.log(`Response headers:: ${JSON.stringify(response.headers)}`);
      return response.text();
    })
    .then(text => {
      //
      // Process the text/html received
      //
      var urlPattern = /href\=\s*\"([^\"\>]*)\"\s*\/{0,1}\>/gi;
      var matches,
        output = [];
      while ((matches = urlPattern.exec(text))) {
        // fetch all the urls
        output.push(matches[1]);
      }
      prepareGraph(output);
    })
    .catch(err => console.log(`Error:: ${JSON.stringify(err)}`));
}
