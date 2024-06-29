let picker = document.getElementById("picker")
let custom = document.getElementById("custom")
let current = document.getElementById("current")

picker.addEventListener("change", () => {
    custom.style.background = picker.value;
    current.innerText = picker.value
})