let text = document.getElementById("text");

document.addEventListener("scroll", () => {
    text.style.fontSize = 
    `${20 + window.scrollY*0.05}px`;
});