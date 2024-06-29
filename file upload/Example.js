let upload = document.getElementById("upload")
let image = document.getElementById("image")

upload.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (file) {
        const render = new FileReader();
        render.upload = (e) => {
            image.src = e.target.result;
        };
        render.readAsDataURL(file);
    }
})