let body = document.querySelector("body");
let isToggle = false;

body.onclick = () => {
    if (!isToggle) {
        body.style.backgroundColor = "black";
        body.style.color = "white";
        isToggle = true;
    } else {
        body.style.backgroundColor = "white";
        body.style.color = "black";
        isToggle = false;
    }
}