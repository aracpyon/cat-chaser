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
let soundFlag = true;
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

var renderer = new THREE.WebGLRenderer({ antialias: true });
let gameOver = document.getElementById("game-over-container");

renderer.setClearColor("#80e5ff");
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const canvas = document.getElementsByTagName("canvas")[0];
const playSong = document.getElementById("play-song");
const splashSong = document.getElementById("splash-song");
const blastSound = document.getElementById("blast1");
const blastSound2 = document.getElementById("blast2");
//responsive window
window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;

  camera.updateProjectionMatrix();
});


scene.add(mouse, ground, frontLight, backLight);

document.addEventListener("mousemove", mouseController, false);

if (soundFlag) {
  splashSong.play();
}
const soundOn = document.getElementById("sound-on");
const soundOff = document.getElementById("sound-off");
soundOn.addEventListener('click', () => {
  soundOn.classList.add("hidden");
  soundOff.classList.remove("hidden");
  soundFlag = false;
  splashSong.pause();
})

soundOff.addEventListener('click', () => {
  soundOff.classList.add("hidden");
  soundOn.classList.remove("hidden");
  soundFlag = true;
  splashSong.play();
})



function animate() {
  frameId = requestAnimationFrame(animate);
  // const 
  if (frameCount > 60){
    populateCats(scene, mouse)
    frameCount = 0;
  }
  legs.forEach(leg => {
    if (distance(mouse.position.x, mouse.position.z, leg.position.x, leg.position.z) < 3) {
      playSong.pause();
      cancelAnimationFrame(frameId);
      gameOver.classList.add("show");
      canvas.classList.add("faded")
      if (soundFlag) blastSound.play();
    } 
  })

  heads.forEach(head => {
    if (
      distance(
        mouse.position.x,
        mouse.position.z,
        head.position.x,
        head.position.z
      ) < 3
    ) {
      playSong.pause();
      if (soundFlag) blastSound.play();
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
    tl.to(mouse.position, .3, { y: 4.5, ease: Expo.easeOut })
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
    if (soundFlag) {
      splashSong.pause();
      playSong.play();
    }
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
    soundFlag = true;
  })
  
  