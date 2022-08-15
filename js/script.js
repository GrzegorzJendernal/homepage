console.log("Hej!");
let brokePage = document.querySelector(".js-brokePage");
let uglyStyle = document.querySelector(".body__broken");
let body = document.querySelector(".body");
let buttonText = document.querySelector(".js-buttonText");

brokePage.addEventListener("click", () => {
    body.classList.toggle("body__broken");
    buttonText.innerText = body.classList.contains("body__broken") ? "Napraw" : "Zepsuj";
});
