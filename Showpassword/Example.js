let toggle = document.getElementById("toggle");
let field = document.getElementById("field");

toggle.addEventListener("click", () => {
    if (field.type === "password") {
     toggle.innerText ="Hide";
     field.type ="text";     
    } else {
        toggle.innerText ="Show";
        field.type ="password";
    }
})