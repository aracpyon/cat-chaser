export function distance(mouseX, mouseZ, objX, objZ) {
  //Pythagoream Theorem
  let distanceX = mouseX - objX;
  let distanceZ = mouseZ - objZ;

  return Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceZ, 2));
}

// export function distance(mouse) {
//   let x1 = head.position.x - 2;
//   let x2 = head.position.x + 2;
//   let y1 = head.position.y - 2;
//   let y2 = head.position.y + 2;
//   let length = x2 - x1;
// }

export function collision(mouse, obstacle) {
  return (
    Math.round(mouse.position.x / 1.5 ) === Math.round((obstacle.position.x / 1.5) &&
    Math.round(mouse.position.y) === Math.round(obstacle.position.y) &&
    Math.round(mouse.position.z) === Math.round(obstacle.position.z /4 )
  ))
}

