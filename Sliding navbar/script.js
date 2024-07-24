let slider = document.getElementById("slider");

function getNthChild(element) {
    let parent = element.parentNode;
    let children = Array.from(parent.children);
    return children.indexOf(element);
}
document.querySelectorAll(".navbar > span").forEach((span) => {
    span.addEventListener("mouseover", (element) => {
        let nthChild = getNthChild(element.target);
        slider.style.setProperty("--value", nthChild);
    })
})
    