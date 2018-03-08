/**
 * flocker_proto.js
 * @author Sidharth Mishra
 * @description Flocker prototype script using p5.js.
 * @created Thu Mar 08 2018 12:31:19 GMT-0800 (PST)
 * @copyright BSD 3-Clause License
 *
 *Copyright (c) 2018, Sidharth Mishra
 *All rights reserved.
 *
 *Redistribution and use in source and binary forms, with or without
 *modification, are permitted provided that the following conditions are met:
 *
 ** Redistributions of source code must retain the above copyright notice, this
 *  list of conditions and the following disclaimer.
 *
 ** Redistributions in binary form must reproduce the above copyright notice,
 *  this list of conditions and the following disclaimer in the documentation
 *  and/or other materials provided with the distribution.
 *
 ** Neither the name of the copyright holder nor the names of its
 *  contributors may be used to endorse or promote products derived from
 *  this software without specific prior written permission.
 *
 *THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 *AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 *IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 *DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 *FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 *DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 *SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 *CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 *OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 *OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * @last-modified Thu Mar 08 2018 12:53:18 GMT-0800 (PST)
 */

let swallow;

function preload() {
  swallow = loadImage("./swallow-img.png");
}

//  Flocker p5.js app setup
function setup() {
  createCanvas(640, 480);
  swallow = loadImage("./swallow-img.png");
}

// Draw loop
function draw() {
  scale(0.25, 0.25);
  image(swallow, height / 2, swallow.width / 2, swallow.height / 2);
}
