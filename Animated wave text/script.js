let textElements = document.querySelectorAll("span");
let currentElement =0 ;

let interval = setInterval(() => {
    textElements.item(currentElement).style.animation = 
    "wave 2s linear infinite";
    currentElement++;

    if (currentElement === textElements.length) {
        clearInterval(interval);
    }
} , 100)