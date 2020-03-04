import { collision, distance } from './util';

const faceTexture = new THREE.TextureLoader().load('src/assets/cat_face_2.PNG');
const earTexture = new THREE.TextureLoader().load("src/assets/cat_ear.PNG");
// const sphere = new THREE.SphereGeometry(4, 32, 32);
const earMaterial = new THREE.MeshBasicMaterial({ map: earTexture });
const faceMaterial = new THREE.MeshBasicMaterial({map: faceTexture });
const catMaterial = new THREE.MeshLambertMaterial({ color: 0xf7f7f7 });
// const triangle = new THREE.ConeGeometry(1.5, 2, 32);
const triangle = new THREE.Geometry();
const v1 = new THREE.Vector3(-1.5, 0, 0);
const v2 = new THREE.Vector3(1.5, 0, 0);
const v3 = new THREE.Vector3(0, 3, 0);
triangle.vertices.push(v1);
triangle.vertices.push(v2);
triangle.vertices.push(v3);
triangle.faces.push(new THREE.Face3(0, 1, 2));
triangle.computeFaceNormals();
const circle = new THREE.CircleGeometry(4, 32, 32);

const legTexture = new THREE.TextureLoader().load( 'src/assets/cat_leg.PNG');
const pawTexture = new THREE.TextureLoader().load( 'src/assets/cat_paw.PNG')
const cylinder = new THREE.CylinderGeometry(2, 3, 25, 32 );

const catLegMaterial = new THREE.MeshBasicMaterial({map: legTexture})
const pawMaterial = new THREE.MeshLambertMaterial({ map: pawTexture });
const torus = new THREE.TorusGeometry(2, 3, 16, 100);

export function pawFall(catPaw){
  let pawtl = new TimelineMax();
  pawtl.to(catPaw.position, 1, { y: 11, ease: Expo.easeIn })
}

export function faceRise(catHead) {
  let facetl = new TimelineMax();
  facetl.to(catHead.position, 1, { y: 3, ease: Expo.easeIn})
}

export let obstacles = [];
// export function populateCats(scene, mouse) {
//   let catFace = new THREE.Mesh(circle, faceMaterial);
//   const catEar1 = new THREE.Mesh(triangle, earMaterial);
//   const catEar2 = new THREE.Mesh(triangle, earMaterial);

//   let min = mouse.position.z - 35;
//   let max = mouse.position.z - 70;
//   let x = (Math.random() - 0.5) * 30;
//   // let y = 40;
//   let z = Math.random() * (max - min) + min;

//   for (let i = 0; i < obstacles.length; j++){
//     if (distance(x, z, obstacles[i].position.x, obstacles[i].y - 4 < 0)){
//       x = (Math.random() - 0.5) * 30;
//       // let y = 40;
//       z = Math.random() * (max - min) + min;

//       i = -1;
//     }
//   }

//   catFace.position.set(0, 0, 0);
//   // catFace.rotation.y = 180;
//   catEar1.position.set(-2, 3, 0);
//   catEar1.rotation.z = 44.5;
//   catEar2.position.set(2, 3, 0);
//   catEar2.rotation.z = -44.5;
//   const catHead = new THREE.Group();
//   catHead.add(catFace, catEar1, catEar2);
  
//   const catLeg = new THREE.Mesh(cylinder, catLegMaterial);
//   const catPaw = new THREE.Mesh(torus, pawMaterial);
//   catLeg.position.set(0, 0, 0);
//   catLeg.rotation.y = 360;
//   catPaw.position.set(0, -9.5, 1);
//   catPaw.rotation.x = 0.5*Math.PI;
//   const catPawLeg = new THREE.Group();
//   catPawLeg.add(catLeg, catPaw);

//   let min = mouse.position.z - 35;
//   let max = mouse.position.z - 70;
//   catPawLeg.position.x = (Math.random() - 0.5) * 30;
//   catPawLeg.position.y = 40;
//   catPawLeg.position.z = Math.random() * (max - min) + min;

//   catHead.position.x = (Math.random() - 0.5) * 30;
//   catHead.position.y = -2;
//   catHead.position.z = Math.random() * (max - min) + min;

//   pawFall(catPawLeg);
//   faceRise(catHead);
//   if (!(catHead.position.x === catPawLeg.position.x) && !(catHead.position.z === catPawLeg.position.z)){
//     scene.add(catPawLeg, catHead);
//     obstacles.push(catPawLeg);
//     obstacles.push(catHead);
//   }
//   if (getDistance(
//       mouse.position.x,
//       mouse.position.z,
//       catPawLeg.position.x,
//       catPawLeg.position.z
//     ) < 50) {
//       // catPaw.material.color.set("#ff0000");
//     } 
//   console.log(
//     getDistance(
//       mouse.position.x,
//       mouse.position.z,
//       catPawLeg.position.x,
//       catPawLeg.position.z
//     )
//   );
//   // console.log(catPawLeg.position.x, catPawLeg.position.z);

// }





//save
export function populateCats(scene, mouse) {
  let catFace = new THREE.Mesh(circle, faceMaterial);
  const catEar1 = new THREE.Mesh(triangle, earMaterial);
  const catEar2 = new THREE.Mesh(triangle, earMaterial);
  catFace.position.set(0, 0, 0);
  // catFace.rotation.y = 180;
  catEar1.position.set(-2, 3, 0);
  catEar1.rotation.z = 44.5;
  catEar2.position.set(2, 3, 0);
  catEar2.rotation.z = -44.5;
  const catHead = new THREE.Group();
  catHead.add(catFace, catEar1, catEar2);

  const catLeg = new THREE.Mesh(cylinder, catLegMaterial);
  const catPaw = new THREE.Mesh(torus, pawMaterial);
  catLeg.position.set(0, 0, 0);
  catLeg.rotation.y = 360;
  catPaw.position.set(0, -9.5, 1);
  catPaw.rotation.x = 0.5 * Math.PI;
  const catPawLeg = new THREE.Group();
  catPawLeg.add(catLeg, catPaw);

  let min = mouse.position.z - 35;
  let max = mouse.position.z - 70;
  catPawLeg.position.x = (Math.random() - 0.5) * 30;
  catPawLeg.position.y = 40;
  catPawLeg.position.z = Math.random() * (max - min) + min;

  catHead.position.x = (Math.random() - 0.5) * 30;
  catHead.position.y = -2;
  catHead.position.z = Math.random() * (max - min) + min;

  pawFall(catPawLeg);
  faceRise(catHead);
  if (
    !(catHead.position.x === catPawLeg.position.x) &&
    !(catHead.position.z === catPawLeg.position.z)
  ) {
    scene.add(catPawLeg, catHead);
    obstacles.push(catPawLeg);
    obstacles.push(catHead);
    // debugger
  }
  // if (
  //   distance(
  //     mouse.position.x,
  //     mouse.position.z,
  //     catPawLeg.position.x,
  //     catPawLeg.position.z
  //   ) < 50
  // ) {
  //   catPaw.material.color.set("#ff0000");
  // }
  // console.log(
  //   distance(
  //     mouse.position.x,
  //     mouse.position.z,
  //     catPawLeg.position.x,
  //     catPawLeg.position.z
  //   )
  // );
  // console.log(catPawLeg.position.x, catPawLeg.position.z);
}

// function CatLeg(x, y, radius){

// }







