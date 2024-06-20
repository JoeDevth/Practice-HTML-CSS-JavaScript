let element = document.getElementById("random");

element.style.cursor = "pointer";
element.style.display = "inline";

element.onclick = randomNumber;

function randomNumber() {
    element.innerText = Math.floor(Math.random()*100)
}