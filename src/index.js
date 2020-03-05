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
  legs,
  heads
} from "./cat";
import { distance, collision } from './util';
// import { PointerLockControls } from './PointerLockControls';

let scene = new THREE.Scene();

let frameCount = 0;
let frameId;
let camera = new THREE.PerspectiveCamera(
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
  legs.forEach(leg => {
    if (distance(mouse.position.x, mouse.position.z, leg.position.x, leg.position.z) < 5) {
      
      cancelAnimationFrame(frameId);
      gameOver.classList.add("show");
      canvas.classList.add("faded")
    } 
  })

  heads.forEach(head => {
    if (
      distance(
        mouse.position.x,
        mouse.position.z,
        head.position.x,
        head.position.z
      ) < 1
    ) {
      cancelAnimationFrame(frameId);
      gameOver.classList.add("show");
      canvas.classList.add("faded");
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
   
    heads.forEach(head => {
      scene.remove(head);
    });
    legs.forEach(leg => {
      scene.remove(leg);
    })
    document.body.removeChild(renderer.domElement);
    gameOver.classList.remove("show");
    canvas.classList.remove("faded");

    scene = new THREE.Scene();
    frameCount = 0;
    frameId = 0;
    camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    // debugger
    camera.position.z = 4;
    camera.position.x = 0;
    camera.position.y = 2;
    // debugger

    // renderer = new THREE.WebGLRenderer({ antialias: true });
    document.body.appendChild(renderer.domElement);
    // scene.add(mouse, ground, frontLight, backLight);
    mouse.position.set(0, 0, 0);
    animate();
    // start.removeEventListener("click")
    // debugger
    

  }

  startAgain.addEventListener("click", () => {
    location.reload();
  })
  
  