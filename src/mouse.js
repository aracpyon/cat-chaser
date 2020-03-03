const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
const mouseMaterial = new THREE.MeshLambertMaterial({ color: 0xf7f7f7 });

export const mouse = new THREE.Mesh(boxGeometry, mouseMaterial);

mouse.position.set(0, 0, 0);

export const mouseController = e => {
  const canvas = document.getElementsByTagName("canvas")[0];

  let relativeX = e.clientX - canvas.offsetLeft - canvas.width/2;
  if (relativeX > -canvas.width/2 && relativeX < canvas.width/2) {
    mouse.position.x = relativeX/110;
  }

}

