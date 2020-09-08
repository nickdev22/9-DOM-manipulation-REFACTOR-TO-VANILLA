function showTextOne() {
  document.querySelector("#text-one").style.display = "block";
  document.querySelector("#text-two").style.display = "none";
  document.querySelector("#text-three").style.display = "none";
}
function showTextTwo() {
  document.querySelector("#text-two").style.display = "block";
  document.querySelector("#text-one").style.display = "none";
  document.querySelector("#text-three").style.display = "none";
}
function showTextThree() {
  document.querySelector("#text-three").style.display = "block";
  document.querySelector("#text-two").style.display = "none";
  document.querySelector("#text-one").style.display = "none";
}

// function showTextOne() {
//   document.querySelector("#text-one").classList.toggle("textExpand");
//   document.querySelector("#text-two").style.display = "none";
//   document.querySelector("#text-three").style.display = "none";
// }
// function showTextTwo() {
//   document.querySelector("#text-two").classList.toggle("textExpand");
//   document.querySelector("#text-one").style.display = "none";
//   document.querySelector("#text-three").style.display = "none";
// }
// function showTextThree() {
//   document.querySelector("#text-three").classList.toggle("textExpand");
//   document.querySelector("#text-two").style.display = "none";
//   document.querySelector("#text-one").style.display = "none";
// }
