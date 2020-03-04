import "./styles/index.scss";
import  {ground } from './background';
import { mouse, mouseController } from './mouse';
import { frontLight, backLight } from './light';
import {
  catHead,
  catPawLeg,
  pawFall,
  faceRise,
  populateCats,
  obstacles
} from "./cat";
import { distance, collision } from './util';
// import { PointerLockControls } from './PointerLockControls';

export var scene = new THREE.Scene();

let frameCount = 0;
let frameId;
var camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 4;

camera.position.x = 0;
camera.position.y = 2;
// camera.rotation.x = -0.3;

// camera.rotation.x = ;

var renderer = new THREE.WebGLRenderer({ antialias: true });
// renderer.setClearColor("#e5e5e5");
renderer.setClearColor("#80e5ff");

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

//responsive window
window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;

  camera.updateProjectionMatrix();
});


scene.add(mouse, ground, frontLight, backLight);




// populateCatPaws(scene);

document.addEventListener("mousemove", mouseController, false);


let gameOver = document.getElementById("game-over-container");
const canvas = document.getElementsByTagName("canvas")[0];

function animate() {
  frameId = requestAnimationFrame(animate);
  // const 
  if (frameCount > 60){
    populateCats(scene, mouse)
    frameCount = 0;
  }
  obstacles.forEach(obstacle => {
    if (distance(mouse.position.x, mouse.position.z, obstacle.position.x, obstacle.position.z) < 5) {
      
      cancelAnimationFrame(frameId);
      gameOver.classList.add("show");
      canvas.classList.add("faded")
    } 
  })
  mouse.position.z -= 0.3;
  camera.position.z -= 0.3;
  ground.position.z -= 0.3;
  
  frameCount += 1;
  
    
  // console.log(getDistance(mouse.position.x, mouse.position.z,catPawLeg.position.x, catPawLeg.position.z ))

  renderer.render(scene, camera);


};
  
  
  
  function onMouseClick(event){
    let tl = new TimelineMax();
    tl.to(mouse.position, .3, { y: 4, ease: Expo.easeOut })
    tl.to(mouse.position, .1, { y: 0, ease: Expo.ease })
    
    
  }
  
  window.addEventListener('click', onMouseClick );
  
  renderer.render(scene, camera);
  const start = document.getElementById("start");
  const splash = document.getElementById("splash");
  const startAgain = document.getElementById("start-again");
  start.addEventListener("click", () => {
    splash.classList.add('hidden');
    animate();
  });

  function resetGlobalVariables() {
    frameCount = 0;
    frameId;
    camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    renderer = new THREE.WebGLRenderer({ antialias: true });
    obstacles = [];

  }

  startAgain.addEventListener("click", () => {
    resetGlobalVariables();
    // animate();
  })
  
  