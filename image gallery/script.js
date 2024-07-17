let elements = document.getElementsByClassName("gallery");
let order = 0;

setInterval(() => {
    elements.item(order).style.opacity = "0";
    order + 1 == elements.length ? order = 0 : order+=1 ;
    elements.item(order).style.opacity = "1";
}, 2000)