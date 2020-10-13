/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/background.js":
/*!***************************!*\
  !*** ./src/background.js ***!
  \***************************/
/*! exports provided: ground */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ground", function() { return ground; });
// const planeGeometry = new THREE.PlaneGeometry(window.innerWidth, 2);
var groundColor = new THREE.Color("#ffe066");
var planeGeometry = new THREE.PlaneGeometry(30, window.innerHeight);
var groundMaterial = new THREE.MeshBasicMaterial({
  color: groundColor
});
var ground = new THREE.Mesh(planeGeometry, groundMaterial);
ground.position.set(0, 0, 0);
ground.rotation.x = -0.5 * Math.PI; // ground.position.y = -3;

/***/ }),

/***/ "./src/cat.js":
/*!********************!*\
  !*** ./src/cat.js ***!
  \********************/
/*! exports provided: pawFall, faceRise, heads, legs, populateCats */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pawFall", function() { return pawFall; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faceRise", function() { return faceRise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "heads", function() { return heads; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "legs", function() { return legs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "populateCats", function() { return populateCats; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/util.js");

var faceTexture = new THREE.TextureLoader().load('src/assets/cat_face_2.PNG');
var earTexture = new THREE.TextureLoader().load("src/assets/cat_ear.PNG"); // const sphere = new THREE.SphereGeometry(4, 32, 32);

var earMaterial = new THREE.MeshBasicMaterial({
  map: earTexture
});
var faceMaterial = new THREE.MeshBasicMaterial({
  map: faceTexture
});
var catMaterial = new THREE.MeshLambertMaterial({
  color: 0xf7f7f7
}); // const triangle = new THREE.ConeGeometry(1.5, 2, 32);

var triangle = new THREE.Geometry();
var v1 = new THREE.Vector3(-1.5, 0, 0);
var v2 = new THREE.Vector3(1.5, 0, 0);
var v3 = new THREE.Vector3(0, 3, 0);
triangle.vertices.push(v1);
triangle.vertices.push(v2);
triangle.vertices.push(v3);
triangle.faces.push(new THREE.Face3(0, 1, 2));
triangle.computeFaceNormals();
var circle = new THREE.CircleGeometry(4, 32, 32);
var legTexture = new THREE.TextureLoader().load('src/assets/cat_leg.PNG');
var pawTexture = new THREE.TextureLoader().load('src/assets/cat_paw.PNG');
var cylinder = new THREE.CylinderGeometry(2, 2.3, 23, 32);
var catLegMaterial = new THREE.MeshBasicMaterial({
  map: legTexture
});
var pawMaterial = new THREE.MeshLambertMaterial({
  map: pawTexture
});
var torus = new THREE.TorusGeometry(1.5, 2, 16, 100);
function pawFall(catPaw) {
  var pawtl = new TimelineMax();
  pawtl.to(catPaw.position, 1, {
    y: 11,
    ease: Expo.easeIn
  });
}
function faceRise(catHead) {
  var facetl = new TimelineMax();
  facetl.to(catHead.position, 1, {
    y: 3,
    ease: Expo.easeIn
  });
}
var heads = [];
var legs = [];
function populateCats(scene, mouse) {
  var catFace = new THREE.Mesh(circle, faceMaterial);
  var catEar1 = new THREE.Mesh(triangle, earMaterial);
  var catEar2 = new THREE.Mesh(triangle, earMaterial);
  catFace.position.set(0, 0, 0); // catFace.rotation.y = 180;

  catEar1.position.set(-2, 3, 0);
  catEar1.rotation.z = 44.5;
  catEar2.position.set(2, 3, 0);
  catEar2.rotation.z = -44.5;
  var catHead = new THREE.Group();
  catHead.add(catFace, catEar1, catEar2);
  var catLeg = new THREE.Mesh(cylinder, catLegMaterial);
  var catPaw = new THREE.Mesh(torus, pawMaterial);
  catLeg.position.set(0, 0, 0);
  catLeg.rotation.y = 360;
  catPaw.position.set(0, -9.5, 1);
  catPaw.rotation.x = 0.5 * Math.PI;
  var catPawLeg = new THREE.Group();
  catPawLeg.add(catLeg, catPaw);
  var min = mouse.position.z - 35;
  var max = mouse.position.z - 70;
  catPawLeg.position.x = (Math.random() - 0.5) * 30;
  catPawLeg.position.y = 40;
  catPawLeg.position.z = Math.random() * (max - min) + min;
  catHead.position.x = (Math.random() - 0.5) * 30;
  catHead.position.y = -2;
  catHead.position.z = Math.random() * (max - min) + min;
  pawFall(catPawLeg);
  faceRise(catHead);

  if (!(catHead.position.x === catPawLeg.position.x) && !(catHead.position.z === catPawLeg.position.z)) {
    scene.add(catPawLeg, catHead);
    legs.push(catPawLeg);
    heads.push(catHead);
  }
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _background__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./background */ "./src/background.js");
/* harmony import */ var _mouse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mouse */ "./src/mouse.js");
/* harmony import */ var _light__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./light */ "./src/light.js");
/* harmony import */ var _cat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cat */ "./src/cat.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util */ "./src/util.js");





 // import { PointerLockControls } from './PointerLockControls';

var scene = new THREE.Scene();
var frameCount = 0;
var soundFlag = true;
var frameId;
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 4;
camera.position.x = 0;
camera.position.y = 2;
var renderer = new THREE.WebGLRenderer({
  antialias: true
});
var gameOver = document.getElementById("game-over-container");
renderer.setClearColor("#80e5ff");
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
var canvas = document.getElementsByTagName("canvas")[0];
var playSong = document.getElementById("play-song");
var splashSong = document.getElementById("splash-song");
var blastSound = document.getElementById("blast1");
var blastSound2 = document.getElementById("blast2"); //responsive window

window.addEventListener("resize", function () {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});
scene.add(_mouse__WEBPACK_IMPORTED_MODULE_2__["mouse"], _background__WEBPACK_IMPORTED_MODULE_1__["ground"], _light__WEBPACK_IMPORTED_MODULE_3__["frontLight"], _light__WEBPACK_IMPORTED_MODULE_3__["backLight"]);
document.addEventListener("mousemove", _mouse__WEBPACK_IMPORTED_MODULE_2__["mouseController"], false);

if (soundFlag) {
  splashSong.play();
}

var soundOn = document.getElementById("sound-on");
var soundOff = document.getElementById("sound-off");
soundOn.addEventListener('click', function () {
  soundOn.classList.add("hidden");
  soundOff.classList.remove("hidden");
  soundFlag = false;
  splashSong.pause();
});
soundOff.addEventListener('click', function () {
  soundOff.classList.add("hidden");
  soundOn.classList.remove("hidden");
  soundFlag = true;
  splashSong.play();
});

function animate() {
  frameId = requestAnimationFrame(animate); // const 

  if (frameCount > 60) {
    Object(_cat__WEBPACK_IMPORTED_MODULE_4__["populateCats"])(scene, _mouse__WEBPACK_IMPORTED_MODULE_2__["mouse"]);
    frameCount = 0;
  }

  _cat__WEBPACK_IMPORTED_MODULE_4__["legs"].forEach(function (leg) {
    if (Object(_util__WEBPACK_IMPORTED_MODULE_5__["distance"])(_mouse__WEBPACK_IMPORTED_MODULE_2__["mouse"].position.x, _mouse__WEBPACK_IMPORTED_MODULE_2__["mouse"].position.z, leg.position.x, leg.position.z) < 3) {
      playSong.pause();
      cancelAnimationFrame(frameId);
      gameOver.classList.add("show");
      canvas.classList.add("faded");
      if (soundFlag) blastSound.play();
    }
  });
  _cat__WEBPACK_IMPORTED_MODULE_4__["heads"].forEach(function (head) {
    if (Object(_util__WEBPACK_IMPORTED_MODULE_5__["distance"])(_mouse__WEBPACK_IMPORTED_MODULE_2__["mouse"].position.x, _mouse__WEBPACK_IMPORTED_MODULE_2__["mouse"].position.z, head.position.x, head.position.z) < 3) {
      playSong.pause();
      if (soundFlag) blastSound.play();
      cancelAnimationFrame(frameId);
      gameOver.classList.add("show");
      canvas.classList.add("faded");
    }
  });
  _mouse__WEBPACK_IMPORTED_MODULE_2__["mouse"].position.z -= 0.3;
  camera.position.z -= 0.3;
  _background__WEBPACK_IMPORTED_MODULE_1__["ground"].position.z -= 0.3;
  frameCount += 1; // console.log(getDistance(mouse.position.x, mouse.position.z,catPawLeg.position.x, catPawLeg.position.z ))

  renderer.render(scene, camera);
}

;

function onMouseClick(event) {
  var tl = new TimelineMax();
  tl.to(_mouse__WEBPACK_IMPORTED_MODULE_2__["mouse"].position, .3, {
    y: 5,
    ease: Expo.easeOut
  });
  tl.to(_mouse__WEBPACK_IMPORTED_MODULE_2__["mouse"].position, .1, {
    y: 0,
    ease: Expo.ease
  });
}

window.addEventListener('click', onMouseClick);
renderer.render(scene, camera);
var start = document.getElementById("start");
var splash = document.getElementById("splash");
var startAgain = document.getElementById("start-again");
start.addEventListener("click", function () {
  splash.classList.add('hidden');
  animate();

  if (soundFlag) {
    splashSong.pause();
    playSong.play();
  }
});

function resetGlobalVariables() {
  _cat__WEBPACK_IMPORTED_MODULE_4__["heads"].forEach(function (head) {
    scene.remove(head);
  });
  _cat__WEBPACK_IMPORTED_MODULE_4__["legs"].forEach(function (leg) {
    scene.remove(leg);
  });
  document.body.removeChild(renderer.domElement);
  gameOver.classList.remove("show");
  canvas.classList.remove("faded");
  scene = new THREE.Scene();
  frameCount = 0;
  frameId = 0;
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000); // debugger

  camera.position.z = 4;
  camera.position.x = 0;
  camera.position.y = 2; // debugger
  // renderer = new THREE.WebGLRenderer({ antialias: true });

  document.body.appendChild(renderer.domElement); // scene.add(mouse, ground, frontLight, backLight);

  _mouse__WEBPACK_IMPORTED_MODULE_2__["mouse"].position.set(0, 0, 0);
  animate(); // start.removeEventListener("click")
  // debugger
}

startAgain.addEventListener("click", function () {
  location.reload();
  soundFlag = true;
});

/***/ }),

/***/ "./src/light.js":
/*!**********************!*\
  !*** ./src/light.js ***!
  \**********************/
/*! exports provided: backLight, frontLight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backLight", function() { return backLight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frontLight", function() { return frontLight; });
var backLight = new THREE.PointLight(0xffffff, 1, 1000);
var frontLight = new THREE.PointLight(0xffffff, 2, 1000);
backLight.position.set(0, 10, 0);
frontLight.position.set(0, 0, 25);

/***/ }),

/***/ "./src/mouse.js":
/*!**********************!*\
  !*** ./src/mouse.js ***!
  \**********************/
/*! exports provided: cubeMouse, mouseBody, ear1, ear2, mouse, mouseController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cubeMouse", function() { return cubeMouse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mouseBody", function() { return mouseBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ear1", function() { return ear1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ear2", function() { return ear2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mouse", function() { return mouse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mouseController", function() { return mouseController; });
var boxGeometry = new THREE.BoxGeometry(1, 1, 1);
var cubeMouseMaterial = new THREE.MeshLambertMaterial({
  color: 0xf7f7f7
});
var cubeMouse = new THREE.Mesh(boxGeometry, cubeMouseMaterial);
var radius = 0.8;
var radialSegments = 32;
var material = new THREE.MeshStandardMaterial({
  color: 0xf7f7f7
});
var hemiSphereGeom = new THREE.SphereBufferGeometry(radius, radialSegments, Math.round(radialSegments / 4), 0, Math.PI * 2, 0, Math.PI * 0.5);
var mouseBody = new THREE.Mesh(hemiSphereGeom, material); // cubeMouse.position.set(0, 0, 0);

mouseBody.position.set(0, 0, 0);
var sphere = new THREE.SphereGeometry(0.2, 20);
var ear1 = new THREE.Mesh(sphere, material);
var ear2 = new THREE.Mesh(sphere, material);
ear1.position.set(-0.5, 0.5, -0.5);
ear2.position.set(0.5, 0.5, -0.5);

function CustomSinCurve(scale) {
  THREE.Curve.call(this);
  this.scale = scale === undefined ? 1 : scale;
}

CustomSinCurve.prototype = Object.create(THREE.Curve.prototype);
CustomSinCurve.prototype.constructor = CustomSinCurve;

CustomSinCurve.prototype.getPoint = function (t) {
  var tx = t * 3 - 1.5;
  var ty = Math.sin(2 * Math.PI * t);
  var tz = 0;
  return new THREE.Vector3(tx, ty, tz).multiplyScalar(this.scale);
};

var path = new CustomSinCurve(0.3);
var tailGeometry = new THREE.TubeGeometry(path, 20, 0.08, 8, false);
var tail = new THREE.Mesh(tailGeometry, material);
tail.position.set(0, 0.5, 1);
tail.rotation.y = 1.5;
var mouse = new THREE.Group();
mouse.add(mouseBody, ear1, ear2, tail);
var mouseController = function mouseController(e) {
  var canvas = document.getElementsByTagName("canvas")[0];
  var relativeX = e.clientX - canvas.offsetLeft - canvas.width / 2;

  if (relativeX > -canvas.width / 2 && relativeX < canvas.width / 2) {
    mouse.position.x = relativeX / 110;
  }
};

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! exports provided: distance, collision */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distance", function() { return distance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collision", function() { return collision; });
function distance(mouseX, mouseZ, objX, objZ) {
  //Pythagoream Theorem
  var distanceX = mouseX - objX;
  var distanceZ = mouseZ - objZ;
  return Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceZ, 2));
} // export function distance(mouse) {
//   let x1 = head.position.x - 2;
//   let x2 = head.position.x + 2;
//   let y1 = head.position.y - 2;
//   let y2 = head.position.y + 2;
//   let length = x2 - x1;
// }

function collision(mouse, obstacle) {
  return Math.round(mouse.position.x / 1.5) === Math.round(obstacle.position.x / 1.5 && Math.round(mouse.position.y) === Math.round(obstacle.position.y) && Math.round(mouse.position.z) === Math.round(obstacle.position.z / 4));
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhY2tncm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpZ2h0LmpzIiwid2VicGFjazovLy8uL3NyYy9tb3VzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3M/YzgwNyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC5qcyJdLCJuYW1lcyI6WyJncm91bmRDb2xvciIsIlRIUkVFIiwiQ29sb3IiLCJwbGFuZUdlb21ldHJ5IiwiUGxhbmVHZW9tZXRyeSIsIndpbmRvdyIsImlubmVySGVpZ2h0IiwiZ3JvdW5kTWF0ZXJpYWwiLCJNZXNoQmFzaWNNYXRlcmlhbCIsImNvbG9yIiwiZ3JvdW5kIiwiTWVzaCIsInBvc2l0aW9uIiwic2V0Iiwicm90YXRpb24iLCJ4IiwiTWF0aCIsIlBJIiwiZmFjZVRleHR1cmUiLCJUZXh0dXJlTG9hZGVyIiwibG9hZCIsImVhclRleHR1cmUiLCJlYXJNYXRlcmlhbCIsIm1hcCIsImZhY2VNYXRlcmlhbCIsImNhdE1hdGVyaWFsIiwiTWVzaExhbWJlcnRNYXRlcmlhbCIsInRyaWFuZ2xlIiwiR2VvbWV0cnkiLCJ2MSIsIlZlY3RvcjMiLCJ2MiIsInYzIiwidmVydGljZXMiLCJwdXNoIiwiZmFjZXMiLCJGYWNlMyIsImNvbXB1dGVGYWNlTm9ybWFscyIsImNpcmNsZSIsIkNpcmNsZUdlb21ldHJ5IiwibGVnVGV4dHVyZSIsInBhd1RleHR1cmUiLCJjeWxpbmRlciIsIkN5bGluZGVyR2VvbWV0cnkiLCJjYXRMZWdNYXRlcmlhbCIsInBhd01hdGVyaWFsIiwidG9ydXMiLCJUb3J1c0dlb21ldHJ5IiwicGF3RmFsbCIsImNhdFBhdyIsInBhd3RsIiwiVGltZWxpbmVNYXgiLCJ0byIsInkiLCJlYXNlIiwiRXhwbyIsImVhc2VJbiIsImZhY2VSaXNlIiwiY2F0SGVhZCIsImZhY2V0bCIsImhlYWRzIiwibGVncyIsInBvcHVsYXRlQ2F0cyIsInNjZW5lIiwibW91c2UiLCJjYXRGYWNlIiwiY2F0RWFyMSIsImNhdEVhcjIiLCJ6IiwiR3JvdXAiLCJhZGQiLCJjYXRMZWciLCJjYXRQYXdMZWciLCJtaW4iLCJtYXgiLCJyYW5kb20iLCJTY2VuZSIsImZyYW1lQ291bnQiLCJzb3VuZEZsYWciLCJmcmFtZUlkIiwiY2FtZXJhIiwiUGVyc3BlY3RpdmVDYW1lcmEiLCJpbm5lcldpZHRoIiwicmVuZGVyZXIiLCJXZWJHTFJlbmRlcmVyIiwiYW50aWFsaWFzIiwiZ2FtZU92ZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2V0Q2xlYXJDb2xvciIsInNldFNpemUiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJkb21FbGVtZW50IiwiY2FudmFzIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJwbGF5U29uZyIsInNwbGFzaFNvbmciLCJibGFzdFNvdW5kIiwiYmxhc3RTb3VuZDIiLCJhZGRFdmVudExpc3RlbmVyIiwiYXNwZWN0IiwidXBkYXRlUHJvamVjdGlvbk1hdHJpeCIsImZyb250TGlnaHQiLCJiYWNrTGlnaHQiLCJtb3VzZUNvbnRyb2xsZXIiLCJwbGF5Iiwic291bmRPbiIsInNvdW5kT2ZmIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwicGF1c2UiLCJhbmltYXRlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZm9yRWFjaCIsImxlZyIsImRpc3RhbmNlIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJoZWFkIiwicmVuZGVyIiwib25Nb3VzZUNsaWNrIiwiZXZlbnQiLCJ0bCIsImVhc2VPdXQiLCJzdGFydCIsInNwbGFzaCIsInN0YXJ0QWdhaW4iLCJyZXNldEdsb2JhbFZhcmlhYmxlcyIsInJlbW92ZUNoaWxkIiwibG9jYXRpb24iLCJyZWxvYWQiLCJQb2ludExpZ2h0IiwiYm94R2VvbWV0cnkiLCJCb3hHZW9tZXRyeSIsImN1YmVNb3VzZU1hdGVyaWFsIiwiY3ViZU1vdXNlIiwicmFkaXVzIiwicmFkaWFsU2VnbWVudHMiLCJtYXRlcmlhbCIsIk1lc2hTdGFuZGFyZE1hdGVyaWFsIiwiaGVtaVNwaGVyZUdlb20iLCJTcGhlcmVCdWZmZXJHZW9tZXRyeSIsInJvdW5kIiwibW91c2VCb2R5Iiwic3BoZXJlIiwiU3BoZXJlR2VvbWV0cnkiLCJlYXIxIiwiZWFyMiIsIkN1c3RvbVNpbkN1cnZlIiwic2NhbGUiLCJDdXJ2ZSIsImNhbGwiLCJ1bmRlZmluZWQiLCJwcm90b3R5cGUiLCJPYmplY3QiLCJjcmVhdGUiLCJjb25zdHJ1Y3RvciIsImdldFBvaW50IiwidCIsInR4IiwidHkiLCJzaW4iLCJ0eiIsIm11bHRpcGx5U2NhbGFyIiwicGF0aCIsInRhaWxHZW9tZXRyeSIsIlR1YmVHZW9tZXRyeSIsInRhaWwiLCJlIiwicmVsYXRpdmVYIiwiY2xpZW50WCIsIm9mZnNldExlZnQiLCJ3aWR0aCIsIm1vdXNlWCIsIm1vdXNlWiIsIm9ialgiLCJvYmpaIiwiZGlzdGFuY2VYIiwiZGlzdGFuY2VaIiwic3FydCIsInBvdyIsImNvbGxpc2lvbiIsIm9ic3RhY2xlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtR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U0FBVCxFQUFvQixDQUFwQixDQUFuQyxDQUFQO0FBQ0QsQyxDQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPLFNBQVNHLFNBQVQsQ0FBbUJySCxLQUFuQixFQUEwQnNILFFBQTFCLEVBQW9DO0FBQ3pDLFNBQ0V0SyxJQUFJLENBQUM4SCxLQUFMLENBQVc5RSxLQUFLLENBQUNwRCxRQUFOLENBQWVHLENBQWYsR0FBbUIsR0FBOUIsTUFBd0NDLElBQUksQ0FBQzhILEtBQUwsQ0FBWXdDLFFBQVEsQ0FBQzFLLFFBQVQsQ0FBa0JHLENBQWxCLEdBQXNCLEdBQXZCLElBQ25EQyxJQUFJLENBQUM4SCxLQUFMLENBQVc5RSxLQUFLLENBQUNwRCxRQUFOLENBQWV5QyxDQUExQixNQUFpQ3JDLElBQUksQ0FBQzhILEtBQUwsQ0FBV3dDLFFBQVEsQ0FBQzFLLFFBQVQsQ0FBa0J5QyxDQUE3QixDQURrQixJQUVuRHJDLElBQUksQ0FBQzhILEtBQUwsQ0FBVzlFLEtBQUssQ0FBQ3BELFFBQU4sQ0FBZXdELENBQTFCLE1BQWlDcEQsSUFBSSxDQUFDOEgsS0FBTCxDQUFXd0MsUUFBUSxDQUFDMUssUUFBVCxDQUFrQndELENBQWxCLEdBQXFCLENBQWhDLENBRk8sQ0FEMUM7QUFLRCxDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8vIGNvbnN0IHBsYW5lR2VvbWV0cnkgPSBuZXcgVEhSRUUuUGxhbmVHZW9tZXRyeSh3aW5kb3cuaW5uZXJXaWR0aCwgMik7XG5jb25zdCBncm91bmRDb2xvciA9IG5ldyBUSFJFRS5Db2xvcihcIiNmZmUwNjZcIik7XG5jb25zdCBwbGFuZUdlb21ldHJ5ID0gbmV3IFRIUkVFLlBsYW5lR2VvbWV0cnkoMzAsIHdpbmRvdy5pbm5lckhlaWdodCk7XG5jb25zdCBncm91bmRNYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7IGNvbG9yOiBncm91bmRDb2xvciB9KTtcblxuZXhwb3J0IGNvbnN0IGdyb3VuZCA9IG5ldyBUSFJFRS5NZXNoKHBsYW5lR2VvbWV0cnksIGdyb3VuZE1hdGVyaWFsKTtcblxuZ3JvdW5kLnBvc2l0aW9uLnNldCgwLCAwLCAwKTtcbmdyb3VuZC5yb3RhdGlvbi54ID0gLTAuNSpNYXRoLlBJO1xuLy8gZ3JvdW5kLnBvc2l0aW9uLnkgPSAtMztcbiIsImltcG9ydCB7IGNvbGxpc2lvbiwgZGlzdGFuY2UgfSBmcm9tICcuL3V0aWwnO1xuXG5jb25zdCBmYWNlVGV4dHVyZSA9IG5ldyBUSFJFRS5UZXh0dXJlTG9hZGVyKCkubG9hZCgnc3JjL2Fzc2V0cy9jYXRfZmFjZV8yLlBORycpO1xuY29uc3QgZWFyVGV4dHVyZSA9IG5ldyBUSFJFRS5UZXh0dXJlTG9hZGVyKCkubG9hZChcInNyYy9hc3NldHMvY2F0X2Vhci5QTkdcIik7XG4vLyBjb25zdCBzcGhlcmUgPSBuZXcgVEhSRUUuU3BoZXJlR2VvbWV0cnkoNCwgMzIsIDMyKTtcbmNvbnN0IGVhck1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHsgbWFwOiBlYXJUZXh0dXJlIH0pO1xuY29uc3QgZmFjZU1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHttYXA6IGZhY2VUZXh0dXJlIH0pO1xuY29uc3QgY2F0TWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaExhbWJlcnRNYXRlcmlhbCh7IGNvbG9yOiAweGY3ZjdmNyB9KTtcbi8vIGNvbnN0IHRyaWFuZ2xlID0gbmV3IFRIUkVFLkNvbmVHZW9tZXRyeSgxLjUsIDIsIDMyKTtcbmNvbnN0IHRyaWFuZ2xlID0gbmV3IFRIUkVFLkdlb21ldHJ5KCk7XG5jb25zdCB2MSA9IG5ldyBUSFJFRS5WZWN0b3IzKC0xLjUsIDAsIDApO1xuY29uc3QgdjIgPSBuZXcgVEhSRUUuVmVjdG9yMygxLjUsIDAsIDApO1xuY29uc3QgdjMgPSBuZXcgVEhSRUUuVmVjdG9yMygwLCAzLCAwKTtcbnRyaWFuZ2xlLnZlcnRpY2VzLnB1c2godjEpO1xudHJpYW5nbGUudmVydGljZXMucHVzaCh2Mik7XG50cmlhbmdsZS52ZXJ0aWNlcy5wdXNoKHYzKTtcbnRyaWFuZ2xlLmZhY2VzLnB1c2gobmV3IFRIUkVFLkZhY2UzKDAsIDEsIDIpKTtcbnRyaWFuZ2xlLmNvbXB1dGVGYWNlTm9ybWFscygpO1xuY29uc3QgY2lyY2xlID0gbmV3IFRIUkVFLkNpcmNsZUdlb21ldHJ5KDQsIDMyLCAzMik7XG5cbmNvbnN0IGxlZ1RleHR1cmUgPSBuZXcgVEhSRUUuVGV4dHVyZUxvYWRlcigpLmxvYWQoICdzcmMvYXNzZXRzL2NhdF9sZWcuUE5HJyk7XG5jb25zdCBwYXdUZXh0dXJlID0gbmV3IFRIUkVFLlRleHR1cmVMb2FkZXIoKS5sb2FkKCAnc3JjL2Fzc2V0cy9jYXRfcGF3LlBORycpXG5jb25zdCBjeWxpbmRlciA9IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KDIsIDIuMywgMjMsIDMyICk7XG5cbmNvbnN0IGNhdExlZ01hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHttYXA6IGxlZ1RleHR1cmV9KVxuY29uc3QgcGF3TWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaExhbWJlcnRNYXRlcmlhbCh7IG1hcDogcGF3VGV4dHVyZSB9KTtcbmNvbnN0IHRvcnVzID0gbmV3IFRIUkVFLlRvcnVzR2VvbWV0cnkoMS41LCAyLCAxNiwgMTAwKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHBhd0ZhbGwoY2F0UGF3KXtcbiAgbGV0IHBhd3RsID0gbmV3IFRpbWVsaW5lTWF4KCk7XG4gIHBhd3RsLnRvKGNhdFBhdy5wb3NpdGlvbiwgMSwgeyB5OiAxMSwgZWFzZTogRXhwby5lYXNlSW4gfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZhY2VSaXNlKGNhdEhlYWQpIHtcbiAgbGV0IGZhY2V0bCA9IG5ldyBUaW1lbGluZU1heCgpO1xuICBmYWNldGwudG8oY2F0SGVhZC5wb3NpdGlvbiwgMSwgeyB5OiAzLCBlYXNlOiBFeHBvLmVhc2VJbn0pXG59XG5cbmV4cG9ydCBsZXQgaGVhZHMgPSBbXTtcbmV4cG9ydCBsZXQgbGVncyA9IFtdO1xuXG5leHBvcnQgZnVuY3Rpb24gcG9wdWxhdGVDYXRzKHNjZW5lLCBtb3VzZSkge1xuICBsZXQgY2F0RmFjZSA9IG5ldyBUSFJFRS5NZXNoKGNpcmNsZSwgZmFjZU1hdGVyaWFsKTtcbiAgY29uc3QgY2F0RWFyMSA9IG5ldyBUSFJFRS5NZXNoKHRyaWFuZ2xlLCBlYXJNYXRlcmlhbCk7XG4gIGNvbnN0IGNhdEVhcjIgPSBuZXcgVEhSRUUuTWVzaCh0cmlhbmdsZSwgZWFyTWF0ZXJpYWwpO1xuICBjYXRGYWNlLnBvc2l0aW9uLnNldCgwLCAwLCAwKTtcbiAgLy8gY2F0RmFjZS5yb3RhdGlvbi55ID0gMTgwO1xuICBjYXRFYXIxLnBvc2l0aW9uLnNldCgtMiwgMywgMCk7XG4gIGNhdEVhcjEucm90YXRpb24ueiA9IDQ0LjU7XG4gIGNhdEVhcjIucG9zaXRpb24uc2V0KDIsIDMsIDApO1xuICBjYXRFYXIyLnJvdGF0aW9uLnogPSAtNDQuNTtcbiAgY29uc3QgY2F0SGVhZCA9IG5ldyBUSFJFRS5Hcm91cCgpO1xuICBjYXRIZWFkLmFkZChjYXRGYWNlLCBjYXRFYXIxLCBjYXRFYXIyKTtcblxuICBjb25zdCBjYXRMZWcgPSBuZXcgVEhSRUUuTWVzaChjeWxpbmRlciwgY2F0TGVnTWF0ZXJpYWwpO1xuICBjb25zdCBjYXRQYXcgPSBuZXcgVEhSRUUuTWVzaCh0b3J1cywgcGF3TWF0ZXJpYWwpO1xuICBjYXRMZWcucG9zaXRpb24uc2V0KDAsIDAsIDApO1xuICBjYXRMZWcucm90YXRpb24ueSA9IDM2MDtcbiAgY2F0UGF3LnBvc2l0aW9uLnNldCgwLCAtOS41LCAxKTtcbiAgY2F0UGF3LnJvdGF0aW9uLnggPSAwLjUgKiBNYXRoLlBJO1xuICBjb25zdCBjYXRQYXdMZWcgPSBuZXcgVEhSRUUuR3JvdXAoKTtcbiAgY2F0UGF3TGVnLmFkZChjYXRMZWcsIGNhdFBhdyk7XG5cbiAgbGV0IG1pbiA9IG1vdXNlLnBvc2l0aW9uLnogLSAzNTtcbiAgbGV0IG1heCA9IG1vdXNlLnBvc2l0aW9uLnogLSA3MDtcbiAgY2F0UGF3TGVnLnBvc2l0aW9uLnggPSAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiAzMDtcbiAgY2F0UGF3TGVnLnBvc2l0aW9uLnkgPSA0MDtcbiAgY2F0UGF3TGVnLnBvc2l0aW9uLnogPSBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW47XG5cbiAgY2F0SGVhZC5wb3NpdGlvbi54ID0gKE1hdGgucmFuZG9tKCkgLSAwLjUpICogMzA7XG4gIGNhdEhlYWQucG9zaXRpb24ueSA9IC0yO1xuICBjYXRIZWFkLnBvc2l0aW9uLnogPSBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW47XG5cbiAgcGF3RmFsbChjYXRQYXdMZWcpO1xuICBmYWNlUmlzZShjYXRIZWFkKTtcbiAgaWYgKFxuICAgICEoY2F0SGVhZC5wb3NpdGlvbi54ID09PSBjYXRQYXdMZWcucG9zaXRpb24ueCkgJiZcbiAgICAhKGNhdEhlYWQucG9zaXRpb24ueiA9PT0gY2F0UGF3TGVnLnBvc2l0aW9uLnopXG4gICkge1xuICAgIHNjZW5lLmFkZChjYXRQYXdMZWcsIGNhdEhlYWQpO1xuICAgIGxlZ3MucHVzaChjYXRQYXdMZWcpO1xuICAgIGhlYWRzLnB1c2goY2F0SGVhZCk7XG4gICAgXG4gIH1cbiAgXG59XG5cblxuXG5cblxuXG5cblxuXG4iLCJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5pbXBvcnQgIHtncm91bmQgfSBmcm9tICcuL2JhY2tncm91bmQnO1xuaW1wb3J0IHsgbW91c2UsIG1vdXNlQ29udHJvbGxlciB9IGZyb20gJy4vbW91c2UnO1xuaW1wb3J0IHsgZnJvbnRMaWdodCwgYmFja0xpZ2h0IH0gZnJvbSAnLi9saWdodCc7XG5pbXBvcnQge1xuICBjYXRIZWFkLFxuICBjYXRQYXdMZWcsXG4gIHBhd0ZhbGwsXG4gIGZhY2VSaXNlLFxuICBwb3B1bGF0ZUNhdHMsXG4gIGxlZ3MsXG4gIGhlYWRzXG59IGZyb20gXCIuL2NhdFwiO1xuaW1wb3J0IHsgZGlzdGFuY2UsIGNvbGxpc2lvbiB9IGZyb20gJy4vdXRpbCc7XG4vLyBpbXBvcnQgeyBQb2ludGVyTG9ja0NvbnRyb2xzIH0gZnJvbSAnLi9Qb2ludGVyTG9ja0NvbnRyb2xzJztcblxubGV0IHNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XG5cbmxldCBmcmFtZUNvdW50ID0gMDtcbmxldCBzb3VuZEZsYWcgPSB0cnVlO1xubGV0IGZyYW1lSWQ7XG5sZXQgY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKFxuICA3NSxcbiAgd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQsXG4gIDAuMSxcbiAgMTAwMFxuKTtcbmNhbWVyYS5wb3NpdGlvbi56ID0gNDtcbmNhbWVyYS5wb3NpdGlvbi54ID0gMDtcbmNhbWVyYS5wb3NpdGlvbi55ID0gMjtcblxudmFyIHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoeyBhbnRpYWxpYXM6IHRydWUgfSk7XG5sZXQgZ2FtZU92ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWUtb3Zlci1jb250YWluZXJcIik7XG5cbnJlbmRlcmVyLnNldENsZWFyQ29sb3IoXCIjODBlNWZmXCIpO1xucmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocmVuZGVyZXIuZG9tRWxlbWVudCk7XG5cbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiY2FudmFzXCIpWzBdO1xuY29uc3QgcGxheVNvbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXktc29uZ1wiKTtcbmNvbnN0IHNwbGFzaFNvbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNwbGFzaC1zb25nXCIpO1xuY29uc3QgYmxhc3RTb3VuZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmxhc3QxXCIpO1xuY29uc3QgYmxhc3RTb3VuZDIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJsYXN0MlwiKTtcbi8vcmVzcG9uc2l2ZSB3aW5kb3dcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHtcbiAgcmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcbiAgY2FtZXJhLmFzcGVjdCA9IHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0O1xuXG4gIGNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG59KTtcblxuXG5zY2VuZS5hZGQobW91c2UsIGdyb3VuZCwgZnJvbnRMaWdodCwgYmFja0xpZ2h0KTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBtb3VzZUNvbnRyb2xsZXIsIGZhbHNlKTtcblxuaWYgKHNvdW5kRmxhZykge1xuICBzcGxhc2hTb25nLnBsYXkoKTtcbn1cbmNvbnN0IHNvdW5kT24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNvdW5kLW9uXCIpO1xuY29uc3Qgc291bmRPZmYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNvdW5kLW9mZlwiKTtcbnNvdW5kT24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIHNvdW5kT24uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgc291bmRPZmYuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgc291bmRGbGFnID0gZmFsc2U7XG4gIHNwbGFzaFNvbmcucGF1c2UoKTtcbn0pXG5cbnNvdW5kT2ZmLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBzb3VuZE9mZi5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICBzb3VuZE9uLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gIHNvdW5kRmxhZyA9IHRydWU7XG4gIHNwbGFzaFNvbmcucGxheSgpO1xufSlcblxuXG5cbmZ1bmN0aW9uIGFuaW1hdGUoKSB7XG4gIGZyYW1lSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4gIC8vIGNvbnN0IFxuICBpZiAoZnJhbWVDb3VudCA+IDYwKXtcbiAgICBwb3B1bGF0ZUNhdHMoc2NlbmUsIG1vdXNlKVxuICAgIGZyYW1lQ291bnQgPSAwO1xuICB9XG4gIGxlZ3MuZm9yRWFjaChsZWcgPT4ge1xuICAgIGlmIChkaXN0YW5jZShtb3VzZS5wb3NpdGlvbi54LCBtb3VzZS5wb3NpdGlvbi56LCBsZWcucG9zaXRpb24ueCwgbGVnLnBvc2l0aW9uLnopIDwgMykge1xuICAgICAgcGxheVNvbmcucGF1c2UoKTtcbiAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGZyYW1lSWQpO1xuICAgICAgZ2FtZU92ZXIuY2xhc3NMaXN0LmFkZChcInNob3dcIik7XG4gICAgICBjYW52YXMuY2xhc3NMaXN0LmFkZChcImZhZGVkXCIpXG4gICAgICBpZiAoc291bmRGbGFnKSBibGFzdFNvdW5kLnBsYXkoKTtcbiAgICB9IFxuICB9KVxuXG4gIGhlYWRzLmZvckVhY2goaGVhZCA9PiB7XG4gICAgaWYgKFxuICAgICAgZGlzdGFuY2UoXG4gICAgICAgIG1vdXNlLnBvc2l0aW9uLngsXG4gICAgICAgIG1vdXNlLnBvc2l0aW9uLnosXG4gICAgICAgIGhlYWQucG9zaXRpb24ueCxcbiAgICAgICAgaGVhZC5wb3NpdGlvbi56XG4gICAgICApIDwgM1xuICAgICkge1xuICAgICAgcGxheVNvbmcucGF1c2UoKTtcbiAgICAgIGlmIChzb3VuZEZsYWcpIGJsYXN0U291bmQucGxheSgpO1xuICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoZnJhbWVJZCk7XG4gICAgICBnYW1lT3Zlci5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTtcbiAgICAgIGNhbnZhcy5jbGFzc0xpc3QuYWRkKFwiZmFkZWRcIik7XG4gICAgfSBcbiAgfSlcblxuICBtb3VzZS5wb3NpdGlvbi56IC09IDAuMztcbiAgY2FtZXJhLnBvc2l0aW9uLnogLT0gMC4zO1xuICBncm91bmQucG9zaXRpb24ueiAtPSAwLjM7XG4gIFxuICBmcmFtZUNvdW50ICs9IDE7XG4gIFxuICAgIFxuICAvLyBjb25zb2xlLmxvZyhnZXREaXN0YW5jZShtb3VzZS5wb3NpdGlvbi54LCBtb3VzZS5wb3NpdGlvbi56LGNhdFBhd0xlZy5wb3NpdGlvbi54LCBjYXRQYXdMZWcucG9zaXRpb24ueiApKVxuXG4gIHJlbmRlcmVyLnJlbmRlcihzY2VuZSwgY2FtZXJhKTtcblxuXG59O1xuICBcbiAgXG4gIFxuICBmdW5jdGlvbiBvbk1vdXNlQ2xpY2soZXZlbnQpe1xuICAgIGxldCB0bCA9IG5ldyBUaW1lbGluZU1heCgpO1xuICAgIHRsLnRvKG1vdXNlLnBvc2l0aW9uLCAuMywgeyB5OiA1LCBlYXNlOiBFeHBvLmVhc2VPdXQgfSlcbiAgICB0bC50byhtb3VzZS5wb3NpdGlvbiwgLjEsIHsgeTogMCwgZWFzZTogRXhwby5lYXNlIH0pXG4gICAgXG4gICAgXG4gIH1cbiAgXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uTW91c2VDbGljayApO1xuICBcbiAgcmVuZGVyZXIucmVuZGVyKHNjZW5lLCBjYW1lcmEpO1xuICBjb25zdCBzdGFydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhcnRcIik7XG4gIGNvbnN0IHNwbGFzaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3BsYXNoXCIpO1xuICBjb25zdCBzdGFydEFnYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFydC1hZ2FpblwiKTtcbiAgXG4gIHN0YXJ0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgc3BsYXNoLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIGFuaW1hdGUoKTtcbiAgICBpZiAoc291bmRGbGFnKSB7XG4gICAgICBzcGxhc2hTb25nLnBhdXNlKCk7XG4gICAgICBwbGF5U29uZy5wbGF5KCk7XG4gICAgfVxuICB9KTtcblxuICBmdW5jdGlvbiByZXNldEdsb2JhbFZhcmlhYmxlcygpIHtcbiAgIFxuICAgIGhlYWRzLmZvckVhY2goaGVhZCA9PiB7XG4gICAgICBzY2VuZS5yZW1vdmUoaGVhZCk7XG4gICAgfSk7XG4gICAgbGVncy5mb3JFYWNoKGxlZyA9PiB7XG4gICAgICBzY2VuZS5yZW1vdmUobGVnKTtcbiAgICB9KVxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQocmVuZGVyZXIuZG9tRWxlbWVudCk7XG4gICAgZ2FtZU92ZXIuY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XG4gICAgY2FudmFzLmNsYXNzTGlzdC5yZW1vdmUoXCJmYWRlZFwiKTtcblxuICAgIHNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XG4gICAgZnJhbWVDb3VudCA9IDA7XG4gICAgZnJhbWVJZCA9IDA7XG4gICAgY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKFxuICAgICAgNzUsXG4gICAgICB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodCxcbiAgICAgIDAuMSxcbiAgICAgIDEwMDBcbiAgICApO1xuICAgIC8vIGRlYnVnZ2VyXG4gICAgY2FtZXJhLnBvc2l0aW9uLnogPSA0O1xuICAgIGNhbWVyYS5wb3NpdGlvbi54ID0gMDtcbiAgICBjYW1lcmEucG9zaXRpb24ueSA9IDI7XG4gICAgLy8gZGVidWdnZXJcblxuICAgIC8vIHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoeyBhbnRpYWxpYXM6IHRydWUgfSk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChyZW5kZXJlci5kb21FbGVtZW50KTtcbiAgICAvLyBzY2VuZS5hZGQobW91c2UsIGdyb3VuZCwgZnJvbnRMaWdodCwgYmFja0xpZ2h0KTtcbiAgICBtb3VzZS5wb3NpdGlvbi5zZXQoMCwgMCwgMCk7XG4gICAgYW5pbWF0ZSgpO1xuICAgIC8vIHN0YXJ0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiKVxuICAgIC8vIGRlYnVnZ2VyXG4gICAgXG5cbiAgfVxuXG4gIHN0YXJ0QWdhaW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICBzb3VuZEZsYWcgPSB0cnVlO1xuICB9KVxuICBcbiAgIiwiZXhwb3J0IGNvbnN0IGJhY2tMaWdodCA9IG5ldyBUSFJFRS5Qb2ludExpZ2h0KDB4ZmZmZmZmLCAxLCAxMDAwKTtcbmV4cG9ydCBjb25zdCBmcm9udExpZ2h0ID0gbmV3IFRIUkVFLlBvaW50TGlnaHQoMHhmZmZmZmYsIDIsIDEwMDApO1xuXG5iYWNrTGlnaHQucG9zaXRpb24uc2V0KDAsIDEwLCAwKTtcbmZyb250TGlnaHQucG9zaXRpb24uc2V0KDAsIDAsIDI1KTtcblxuXG4iLCJjb25zdCBib3hHZW9tZXRyeSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgxLCAxLCAxKTtcbmNvbnN0IGN1YmVNb3VzZU1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hMYW1iZXJ0TWF0ZXJpYWwoeyBjb2xvcjogMHhmN2Y3ZjcgfSk7XG5cbmV4cG9ydCBjb25zdCBjdWJlTW91c2UgPSBuZXcgVEhSRUUuTWVzaChib3hHZW9tZXRyeSwgY3ViZU1vdXNlTWF0ZXJpYWwpO1xuXG5jb25zdCByYWRpdXMgPSAwLjg7XG5jb25zdCByYWRpYWxTZWdtZW50cyA9IDMyO1xuY29uc3QgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWwoeyBjb2xvcjogMHhmN2Y3ZjcgfSk7XG5jb25zdCBoZW1pU3BoZXJlR2VvbSA9IG5ldyBUSFJFRS5TcGhlcmVCdWZmZXJHZW9tZXRyeShcbiAgcmFkaXVzLFxuICByYWRpYWxTZWdtZW50cyxcbiAgTWF0aC5yb3VuZChyYWRpYWxTZWdtZW50cyAvIDQpLFxuICAwLFxuICBNYXRoLlBJICogMixcbiAgMCxcbiAgTWF0aC5QSSAqIDAuNVxuKTtcbmV4cG9ydCB2YXIgbW91c2VCb2R5ID0gbmV3IFRIUkVFLk1lc2goaGVtaVNwaGVyZUdlb20sIG1hdGVyaWFsKTtcblxuLy8gY3ViZU1vdXNlLnBvc2l0aW9uLnNldCgwLCAwLCAwKTtcbm1vdXNlQm9keS5wb3NpdGlvbi5zZXQoMCwgMCwgMCk7XG5cbmNvbnN0IHNwaGVyZSA9IG5ldyBUSFJFRS5TcGhlcmVHZW9tZXRyeSgwLjIsIDIwKTtcbmV4cG9ydCBjb25zdCBlYXIxID0gbmV3IFRIUkVFLk1lc2goc3BoZXJlLCBtYXRlcmlhbCk7XG5leHBvcnQgY29uc3QgZWFyMiA9IG5ldyBUSFJFRS5NZXNoKHNwaGVyZSwgbWF0ZXJpYWwpO1xuXG5cbmVhcjEucG9zaXRpb24uc2V0KC0wLjUsIDAuNSwgLTAuNSk7XG5lYXIyLnBvc2l0aW9uLnNldCgwLjUsIDAuNSwgLTAuNSk7XG5cbmZ1bmN0aW9uIEN1c3RvbVNpbkN1cnZlKHNjYWxlKSB7XG4gIFRIUkVFLkN1cnZlLmNhbGwodGhpcyk7XG5cbiAgdGhpcy5zY2FsZSA9IHNjYWxlID09PSB1bmRlZmluZWQgPyAxIDogc2NhbGU7XG59XG5cbkN1c3RvbVNpbkN1cnZlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoVEhSRUUuQ3VydmUucHJvdG90eXBlKTtcbkN1c3RvbVNpbkN1cnZlLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEN1c3RvbVNpbkN1cnZlO1xuXG5DdXN0b21TaW5DdXJ2ZS5wcm90b3R5cGUuZ2V0UG9pbnQgPSBmdW5jdGlvbih0KSB7XG4gIHZhciB0eCA9IHQgKiAzIC0gMS41O1xuICB2YXIgdHkgPSBNYXRoLnNpbigyICogTWF0aC5QSSAqIHQpO1xuICB2YXIgdHogPSAwO1xuXG4gIHJldHVybiBuZXcgVEhSRUUuVmVjdG9yMyh0eCwgdHksIHR6KS5tdWx0aXBseVNjYWxhcih0aGlzLnNjYWxlKTtcbn07XG5cbnZhciBwYXRoID0gbmV3IEN1c3RvbVNpbkN1cnZlKDAuMyk7XG52YXIgdGFpbEdlb21ldHJ5ID0gbmV3IFRIUkVFLlR1YmVHZW9tZXRyeShwYXRoLCAyMCwgMC4wOCwgOCwgZmFsc2UpO1xudmFyIHRhaWwgPSBuZXcgVEhSRUUuTWVzaCh0YWlsR2VvbWV0cnksIG1hdGVyaWFsKTtcblxudGFpbC5wb3NpdGlvbi5zZXQoMCwgMC41LCAxKVxudGFpbC5yb3RhdGlvbi55ID0gMS41O1xuXG5leHBvcnQgY29uc3QgbW91c2UgPSBuZXcgVEhSRUUuR3JvdXAoKTtcbm1vdXNlLmFkZChtb3VzZUJvZHksIGVhcjEsIGVhcjIsIHRhaWwpO1xuXG5leHBvcnQgY29uc3QgbW91c2VDb250cm9sbGVyID0gZSA9PiB7XG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiY2FudmFzXCIpWzBdO1xuXG4gIGxldCByZWxhdGl2ZVggPSBlLmNsaWVudFggLSBjYW52YXMub2Zmc2V0TGVmdCAtIGNhbnZhcy53aWR0aC8yO1xuICBpZiAocmVsYXRpdmVYID4gLWNhbnZhcy53aWR0aC8yICYmIHJlbGF0aXZlWCA8IGNhbnZhcy53aWR0aC8yKSB7XG4gICAgbW91c2UucG9zaXRpb24ueCA9IHJlbGF0aXZlWC8xMTA7XG4gIFxuICB9XG5cbn1cblxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiZXhwb3J0IGZ1bmN0aW9uIGRpc3RhbmNlKG1vdXNlWCwgbW91c2VaLCBvYmpYLCBvYmpaKSB7XG4gIC8vUHl0aGFnb3JlYW0gVGhlb3JlbVxuICBsZXQgZGlzdGFuY2VYID0gbW91c2VYIC0gb2JqWDtcbiAgbGV0IGRpc3RhbmNlWiA9IG1vdXNlWiAtIG9ialo7XG5cbiAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyhkaXN0YW5jZVgsIDIpICsgTWF0aC5wb3coZGlzdGFuY2VaLCAyKSk7XG59XG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBkaXN0YW5jZShtb3VzZSkge1xuLy8gICBsZXQgeDEgPSBoZWFkLnBvc2l0aW9uLnggLSAyO1xuLy8gICBsZXQgeDIgPSBoZWFkLnBvc2l0aW9uLnggKyAyO1xuLy8gICBsZXQgeTEgPSBoZWFkLnBvc2l0aW9uLnkgLSAyO1xuLy8gICBsZXQgeTIgPSBoZWFkLnBvc2l0aW9uLnkgKyAyO1xuLy8gICBsZXQgbGVuZ3RoID0geDIgLSB4MTtcbi8vIH1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbGxpc2lvbihtb3VzZSwgb2JzdGFjbGUpIHtcbiAgcmV0dXJuIChcbiAgICBNYXRoLnJvdW5kKG1vdXNlLnBvc2l0aW9uLnggLyAxLjUgKSA9PT0gTWF0aC5yb3VuZCgob2JzdGFjbGUucG9zaXRpb24ueCAvIDEuNSkgJiZcbiAgICBNYXRoLnJvdW5kKG1vdXNlLnBvc2l0aW9uLnkpID09PSBNYXRoLnJvdW5kKG9ic3RhY2xlLnBvc2l0aW9uLnkpICYmXG4gICAgTWF0aC5yb3VuZChtb3VzZS5wb3NpdGlvbi56KSA9PT0gTWF0aC5yb3VuZChvYnN0YWNsZS5wb3NpdGlvbi56IC80IClcbiAgKSlcbn1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==