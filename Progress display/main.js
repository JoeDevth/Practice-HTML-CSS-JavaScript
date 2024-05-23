const progress = document.getElementById("progress");
const heading = document.getElementById("heading");
let isRunning = false;

progress.addEventListener("mouseenter", () => {
  progress.style.setProperty("--a", "360deg");
  if (!isRunning) {
    isRunning = true;
    let i = 0;
    const interval = setInterval(() => {
      heading.innerText = Math.ceil(i / 3.6);
      i = (i + 1) % 360;
      if (i === 0) {
        clearInterval(interval);
        isRunning = false;
      }
    }, 5.5);
  }
});