const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMouseMaterial = new THREE.MeshLambertMaterial({ color: 0xf7f7f7 });

export const cubeMouse = new THREE.Mesh(boxGeometry, cubeMouseMaterial);

const radius = 0.8;
const radialSegments = 32;
const material = new THREE.MeshStandardMaterial({ color: 0xf7f7f7 });
const hemiSphereGeom = new THREE.SphereBufferGeometry(
  radius,
  radialSegments,
  Math.round(radialSegments / 4),
  0,
  Math.PI * 2,
  0,
  Math.PI * 0.5
);
export var mouseBody = new THREE.Mesh(hemiSphereGeom, material);

// cubeMouse.position.set(0, 0, 0);
mouseBody.position.set(0, 0, 0);

const sphere = new THREE.SphereGeometry(0.2, 20);
export const ear1 = new THREE.Mesh(sphere, material);
export const ear2 = new THREE.Mesh(sphere, material);


ear1.position.set(-0.5, 0.5, -0.5);
ear2.position.set(0.5, 0.5, -0.5);

function CustomSinCurve(scale) {
  THREE.Curve.call(this);

  this.scale = scale === undefined ? 1 : scale;
}

CustomSinCurve.prototype = Object.create(THREE.Curve.prototype);
CustomSinCurve.prototype.constructor = CustomSinCurve;

CustomSinCurve.prototype.getPoint = function(t) {
  var tx = t * 3 - 1.5;
  var ty = Math.sin(2 * Math.PI * t);
  var tz = 0;

  return new THREE.Vector3(tx, ty, tz).multiplyScalar(this.scale);
};

var path = new CustomSinCurve(0.3);
var tailGeometry = new THREE.TubeGeometry(path, 20, 0.08, 8, false);
var tail = new THREE.Mesh(tailGeometry, material);

tail.position.set(0, 0.5, 1)
tail.rotation.y = 1.5;

export const mouse = new THREE.Group();
mouse.add(mouseBody, ear1, ear2, tail);

export const mouseController = e => {
  const canvas = document.getElementsByTagName("canvas")[0];

  let relativeX = e.clientX - canvas.offsetLeft - canvas.width/2;
  if (relativeX > -canvas.width/2 && relativeX < canvas.width/2) {
    mouse.position.x = relativeX/110;
  
  }

}

