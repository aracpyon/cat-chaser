// const planeGeometry = new THREE.PlaneGeometry(window.innerWidth, 2);
const groundColor = new THREE.Color("#ffcc66");
const planeGeometry = new THREE.PlaneGeometry(50,window.innerHeight);
const groundMaterial = new THREE.MeshBasicMaterial({ color: groundColor });

export const ground = new THREE.Mesh(planeGeometry, groundMaterial);

ground.position.set(0, -3, 0);
ground.rotation.x = -0.5*Math.PI;
// ground.position.y = -3;
