let slider = document.getElementById("slider");

function getNthChils(element) {
    let parent = element.parentNode;
    let children = Array.from(parent.children);
    return children.indexOf(element);
}
document.querySelectorAll(".navbar > span").forEach((element) => {
    span.addEventListener("mouseover", (element) => {
        let nthChild = getNthChild(element.target);
        slider.style.setProperty("--value", nthChild);
    })
})
    