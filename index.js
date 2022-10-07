alert("move mouse or click on the screen to see the magic");
const body = document.querySelector("body");
body.addEventListener("mousemove", (e) => {
  const xpos = e.offsetX;
  const ypos = e.offsetY;
  const span1 = document.createElement("span");
  span1.style.left = xpos + "px";
  span1.style.top = ypos + "px";
  body.appendChild(span1);

  const size = Math.random() * 100;
  span1.style.width = size + "px";
  span1.style.height = size + "px";
  setTimeout(() => {
    span1.remove();
  }, 3000);
});
