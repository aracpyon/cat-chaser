export function distance(mouseX, mouseZ, objX, objZ) {
  //Pythagoream Theorem
  let distanceX = mouseX - objX;
  let distanceZ = mouseZ - objZ;

  return Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceZ, 2));
}

// export function collision(mouse, obstacles) {
//   for (let i = 0; i < obstacles.length; i++) {
//     if (distance(mouse.position.x, mouse.position.z, obstacles[i].position.x, obstacles[i].position.z)){
//       console.log('has collided');
//     }
//   }
// }

export function collision(mouse, obstacle) {
  return (
    Math.round(mouse.position.x / 1.5 ) === Math.round((obstacle.position.x / 1.5) &&
    Math.round(mouse.position.y) === Math.round(obstacle.position.y) &&
    Math.round(mouse.position.z) === Math.round(obstacle.position.z /4 )
  ))
}

