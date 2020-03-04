import "./styles/index.scss";
import  {ground } from './background';
import { mouse, mouseController } from './mouse';
import { frontLight, backLight } from './light';
import {
  populateCats
} from "./cat";
// import { PointerLockControls } from './PointerLockControls';

export var scene = new THREE.Scene();

let frameCount = 0;

var camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 4;

camera.position.x = 0;
camera.position.y = 2;

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



function animate() {
  requestAnimationFrame(animate);
  const start = document.getElementById("start");
  start.addEventListener("click", () => {
    const splash = document.getElementById("splash");
    splash.classList.add('hidden');

  });
    // if (frameCount > 60){
    //   populateCats(scene, mouse);
    //   frameCount = 0;
    // }
    
    // mouse.position.z -= 0.3;
    // camera.position.z -= 0.3;
    // ground.position.z -= 0.3;
    
    // frameCount += 1;
    
  
    // if (catPaw.position.z === mouse.position.z) scene.remove(catPaw)
    renderer.render(scene, camera);
};
  


function onMouseClick(event){
  let tl = new TimelineMax();
  tl.to(mouse.position, .3, { y: 4, ease: Expo.easeOut })
  tl.to(mouse.position, .1, { y: 0, ease: Expo.ease })
 
  
}

window.addEventListener('click', onMouseClick );

animate();

