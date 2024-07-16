let accordion = document.getElementById("accordion");
let section = document.getElementById("section");
let isShow = false;

accordion.addEventListener("click", () => {
    if (!isShow) {
        section.style.maxHeight = section.scrollHeight + "px";
        isShow = true;
    } else {
        section.style.maxHeight = 0;
        isShow = false;
    }
})