const heading = document.getElementById("hello");
//const heading2 = document.getElementsByTagName('h2')
//const heading2 = document.getElementsByClassName('h2-class')
const heading2 = document.querySelector("#sub-hello");
const heading3 = document.querySelector("#h2-3");

setTimeout(() => {
  addStylesTo(heading, "Javascript");
}, 1500);

setTimeout(() => {
  addStylesTo(heading2, "Практикуйся", "yellow");
}, 3000);

setTimeout(() => {
  addStylesTo(heading3.querySelector("a"), "И все получится!", "blue", "2rem");
}, 4500);

function addStylesTo(node, text, color = "red", fontSize) {
  node.textContent = text;
  node.style.color = color;
  node.style.textAlign = "center";
  node.style.backgroundColor = "black";
  node.style.padding = "2rem";
  node.style.display = "block";
  node.style.width = "100%";
  node.style.textDecoration = "none";
  if (fontSize) {
    node.style.fontSize = fontSize;
  }
}

heading.onclick = () => {
  if (heading.style.color === "red") {
    heading.style.color = "#000";
    heading.style.backgroundColor = "#fff";
  } else {
    heading.style.color = "red";
    heading.style.backgroundColor = "#000";
  }
};

heading2.addEventListener("dblclick", () => {
  if (heading2.style.color === "yellow") {
    heading2.style.color = "#000";
    heading2.style.backgroundColor = "#fff";
  } else {
    heading2.style.color = "yellow";
    heading2.style.backgroundColor = "#000";
  }
});
