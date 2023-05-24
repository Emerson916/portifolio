let sun = document.querySelector("#sun");
let sunContainer = document.querySelector("#sunContainer");
let body = document.querySelector("body");
let moonContainer = document.querySelector("#moonContainer");

//Evento ao clicar no sol
sun.addEventListener("click", () => {
  sunContainer.classList.remove("slideOutLeft");
  sunContainer.classList.add("slideOutRight");
  
  setTimeout(function () {
    moonContainer.classList.add("slideOutLeft");
    sunContainer.classList.remove("slideOutRight");
    body.classList.remove("bg-white");
    body.classList.add("bg-dark");
    moonContainer.style.display = "flex";
    sunContainer.style.display = "none";
  }, 3000);

});

//Evento ao clicar na lua
moonContainer.addEventListener("click", () => {
  moonContainer.classList.remove("slideOutLeft");
  moonContainer.classList.add("slideOutRight");
  
  setTimeout(function () {
    sunContainer.classList.add("slideOutLeft");
    moonContainer.classList.remove("slideOutRight")
    body.classList.remove("bg-dark");
    body.classList.add("bg-white");
    sunContainer.style.display = "flex";
    moonContainer.style.display = "none";
  }, 3000);
});



