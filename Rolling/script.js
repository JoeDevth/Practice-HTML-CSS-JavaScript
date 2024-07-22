let textContainer = document.getElementById(
    "text-container"
)
let textElements = 
document.querySelectorAll(
    ".text"
)
let currentElement = textElements.length-1;

setInterval(() => {
    textElements.forEach((element) => {
        if(textElements.item(currentElement) === element) {
            element.style.opacity = 1;
            element.style.scale = 1;
        } else {
            element.style.opacity =0.3;
            element.style.scale = 0.8;
        }
    });
    textContainer.style.transform =
    `translateY(calc(${textElements.length-1 - currentElement}*34px))`;
    currentElement == 0 ?
    currentElement = textElements.length-1 : currentElement-=1;
}, 1100)