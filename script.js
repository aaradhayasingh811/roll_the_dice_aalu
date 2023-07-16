function def() {
  let b1 = document.querySelectorAll(".d1 div")[4].style.visibility = "visible";
  let b2 = document.querySelectorAll(".d2 div")[4].style.visibility = "visible";
}
function clickme() {
  let x = Math.random();
  x = x * 6;
  x = Math.floor(x) + 1;
  let y = Math.random();
  y = y * 6;
  y = Math.floor(y) + 1;
  // alert(x);
  let b1 = document.querySelectorAll(".d1 div");
  let b2 = document.querySelectorAll(".d2 div");

  for (let i = 0; i < 9; i++) {
    b1[i].style.visibility = "hidden";
  }
  for (let i = 0; i < 9; i++) {
    b2[i].style.visibility = "hidden";
  }
  if (x == 1) {
    b1[4].style.visibility = "visible";

  }
  else if (x == 2) {
    b1[0].style.visibility = "visible";
    b1[8].style.visibility = "visible";

  }
  else if (x == 3) {
    b1[2].style.visibility = "visible";
    b1[4].style.visibility = "visible";
    b1[6].style.visibility = "visible";

  }
  else if (x == 4) {
    b1[0].style.visibility = "visible";
    b1[2].style.visibility = "visible";
    b1[6].style.visibility = "visible";
    b1[8].style.visibility = "visible";

  }
  else if (x == 5) {
    b1[0].style.visibility = "visible";
    b1[2].style.visibility = "visible";
    b1[6].style.visibility = "visible";
    b1[8].style.visibility = "visible";
    b1[4].style.visibility = "visible";

  }
  else if (x == 6) {
    b1[0].style.visibility = "visible";
    b1[3].style.visibility = "visible";
    b1[2].style.visibility = "visible";
    b1[5].style.visibility = "visible";
    b1[6].style.visibility = "visible";
    b1[8].style.visibility = "visible";

  }
  // for dice 2
  if (y == 1) {

    b2[4].style.visibility = "visible";
  }
  else if (y == 2) {

    b2[0].style.visibility = "visible";
    b2[8].style.visibility = "visible";
  }
  else if (y == 3) {

    b2[2].style.visibility = "visible";
    b2[4].style.visibility = "visible";
    b2[6].style.visibility = "visible";
  }
  else if (y == 4) {

    b2[0].style.visibility = "visible";
    b2[2].style.visibility = "visible";
    b2[6].style.visibility = "visible";
    b2[8].style.visibility = "visible";
  }
  else if (y == 5) {

    b2[0].style.visibility = "visible";
    b2[2].style.visibility = "visible";
    b2[6].style.visibility = "visible";
    b2[8].style.visibility = "visible";
    b2[4].style.visibility = "visible";
  }
  else if (y == 6) {

    b2[0].style.visibility = "visible";
    b2[2].style.visibility = "visible";
    b2[3].style.visibility = "visible";
    b2[5].style.visibility = "visible";
    b2[6].style.visibility = "visible";
    b2[8].style.visibility = "visible";
  }
  if (x > y) {
    document.querySelector('div h1').innerHTML = "Player 1 Won the match";
    // alert("Player 1 won the match");
  }
  else if (x == y) {
    document.querySelector('div h1').innerHTML = "Match Draw";
    // alert("Match draw");
  }
  else {
    document.querySelector('div h1').innerHTML = "Player 2 Won the match";
    // alert("Player 2 won the match");
  }

}
function def2() {
  document.querySelector('div h1').innerHTML = "Let's Play";
  let b1 = document.querySelectorAll(".d1 div");
  let b2 = document.querySelectorAll(".d2 div");
  for (let i = 0; i < 9; i++) {
    b1[i].style.visibility = "hidden";
  }
  for (let i = 0; i < 9; i++) {
    b2[i].style.visibility = "hidden";
  }
  b1[4].style.visibility = "visible";
  b2[4].style.visibility = "visible";
}
