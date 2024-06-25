let slider = document.getElementById("slider");
let current = document.getElementById("current");

slider.addEventListener("change", () => {
    current.innerText = "current Volume : " + slider.value
})
current.style.display = "inline";