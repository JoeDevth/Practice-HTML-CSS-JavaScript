let video = document.getElementById("camera");

if(navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true })
    .then((stream) => {
        video.srcObject = stream;
    }, () =>{
        console.log("Something went wrong!")
    });
}