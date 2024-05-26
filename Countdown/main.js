const heading = document.getElementById("countdown");
let count = 10;
let interval = setInterval(() => {
  heading.innerText = `${count}`;
  if (count > 0) {
    count--;
  } else {
    clearInterval(interval);
  }
}, 1000);