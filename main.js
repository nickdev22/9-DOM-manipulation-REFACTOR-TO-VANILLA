// function showTextOne() {
//   document.querySelector("#text-one").style.display = "block";
//   document.querySelector("#text-two").style.display = "none";
//   document.querySelector("#text-three").style.display = "none";
// }
// function showTextTwo() {
//   document.querySelector("#text-two").style.display = "block";
//   document.querySelector("#text-one").style.display = "none";
//   document.querySelector("#text-three").style.display = "none";
// }
// function showTextThree() {
//   document.querySelector("#text-three").style.display = "block";
//   document.querySelector("#text-two").style.display = "none";
//   document.querySelector("#text-one").style.display = "none";
// }

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

let acc = document.getElementsByClassName("accordion");
let i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      let active = document.querySelectorAll(
        ".accordion-div .accordion.active"
      );
      for (let j = 0; j < active.length; j++) {
        active[j].classList.remove("active");
        active[j].nextElementSibling.style.maxHeight = null;
      }
      this.classList.toggle("active");
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
