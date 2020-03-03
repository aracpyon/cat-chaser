// import { scene } from './index';
const circle = new THREE.CircleGeometry( 3, 32 );
const circleMaterial = new THREE.MeshLambertMaterial({ color: 0xf7f7f7 });

export const catFace = new THREE.Mesh( circle, circleMaterial);

export const cylinder = new THREE.CylinderGeometry(2, 2, 25, 32 );
export const cylinderMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff });

export const catPaw = new THREE.Mesh( cylinder, cylinderMaterial);

catFace.position.set(0, 0, -5);
// catPaw.position.set(5, 0, -3);


export function pawFall(catPaw){
  let pawtl = new TimelineMax();
  pawtl.to(catPaw.position, 1, { y: 0, ease: Expo.easeIn })
}

function faceRise(catFace) {
  let facetl = new TimelineMax();
  facetl.to(catFace.position, 1, { y: 0, ease: Expo.easeIn})
}

export function populateCatPaws(scene, mouse){
  
    let catPaw = new THREE.Mesh( cylinder, cylinderMaterial)
    let min = mouse.position.z - 20;
    let max = mouse.position.z - 60;
    catPaw.position.x = (Math.random() - 0.5) * 50;
    catPaw.position.y = 20;
    catPaw.position.z = Math.random() * ( max - min) + min;
    //Math.random() * (max - min) + min;
    pawFall(catPaw)
    scene.add(catPaw);

  
}
export function populateCatFace(scene, mouse) {
  let catFace = new THREE.Mesh( circle, circleMaterial);
  catFace.position.x = (Math.random() - 0.5) * 50;
  catFace.position.y = -3;
  catFace.position.z = Math.random() * mouse.position.z * 200;
  faceRise(catFace);
  scene.add(catFace);
}

export function populateCats(scene, mouse) {
  let catPaw = new THREE.Mesh(cylinder, cylinderMaterial);
  let catFace = new THREE.Mesh(circle, circleMaterial);
  let min = mouse.position.z - 20;
  let max = mouse.position.z - 60;
  catPaw.position.x = (Math.random() - 0.5) * 50;
  catPaw.position.y = 20;
  catPaw.position.z = Math.random() * (max - min) + min;

  catFace.position.x = (Math.random() - 0.5) * 50;
  catFace.position.y = -3;
  catFace.position.z = Math.random() * (max - min) + min;

  pawFall(catPaw);
  faceRise(catFace);
  if (!(catFace.position.x === catPaw.position.x) && !(catFace.position.z === catPaw.position.z)){
    scene.add(catPaw, catFace);
  }
}
