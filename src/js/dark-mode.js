let sun = document.querySelector("#sun");
let sunContainer = document.querySelector("#sunContainer");
let body = document.querySelector("body");
let moonContainer = document.querySelector("#moonContainer");
let background = document.querySelector("#background")

//Evento ao clicar no sol
sun.addEventListener("click", () => {
  sunContainer.classList.remove("slideOutLeft");
  sunContainer.classList.add("slideOutRight");
  
  document.body.style.setProperty("--primary-color", "#6C63FF");
  document.body.style.setProperty("--secundary-color","#534aff");
  document.body.style.setProperty("--tertiary-color", "#b6c6e7");
  document.body.style.setProperty("--background-primary", "#1D1D1D");
  document.body.style.setProperty("--background-secundary", "#111");
  document.body.style.setProperty("--text-color", "#6C63FF");
  document.body.style.setProperty("--text-color-secundary", "#FFFFFF");
  
  setTimeout(function () {
    moonContainer.classList.add("slideOutLeft");
    sunContainer.classList.remove("slideOutRight");
    body.classList.remove("bg-white");
    body.classList.add("bg-dark");
    background.classList.remove("p-item1-light-mode");
    background.classList.add("p-item1");
    moonContainer.style.display = "flex";
    sunContainer.style.display = "none";
  }, 3000);

});

//Evento ao clicar na lua
moonContainer.addEventListener("click", () => {
  moonContainer.classList.remove("slideOutLeft");
  moonContainer.classList.add("slideOutRight");

  document.body.style.setProperty("--background-primary", "#EEF1FF");
  document.body.style.setProperty("--background-secundary", "#b6c6e7");
  document.body.style.setProperty("--text-color-secundary", "#1a1a1a");
  document.body.style.setProperty("--text-color-tertiary", "#FFF");
  
  setTimeout(function () {
    sunContainer.classList.add("slideOutLeft");
    moonContainer.classList.remove("slideOutRight")
    body.classList.remove("bg-dark");
    background.classList.remove("p-item1");
    background.classList.add("p-item1-light-mode");
    body.classList.add("bg-white");
    sunContainer.style.display = "flex";
    moonContainer.style.display = "none";
  }, 3000);
});



