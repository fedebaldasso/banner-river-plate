// function autoScrollUp() {
//   window.scrollBy(0, -1); // Mueve 1 píxel hacia arriba
//   setTimeout(autoScrollUp, 1000); // Repite cada 10ms
// }
// autoScrollUp();

// function autoScrollUp() {
//   window.scrollBy(0, -1); // Desplaza 1 píxel hacia arriba
//   if (window.scrollY === 0) {
//     window.scrollTo(0, document.body.scrollHeight); // Si llega arriba, regresa abajo
//   }
//   setTimeout(autoScrollUp, 1000); // Repite cada 10ms
// }
// autoScrollUp();

window.onload = autoScrollUp();
function autoScrollUp() {
  window.scrollBy(0, -1); // Mueve 1 píxel hacia arriba
  setTimeout(autoScrollUp, 10000); // Repite cada 10ms
}
// autoScrollUp();
