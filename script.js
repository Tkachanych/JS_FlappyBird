function buttonClick(operation) {
  let a = +document.getElementById("input1").value;
  let b = +document.getElementById("input2").value;
  let result = 0;
  switch (operation) {
    case "sum":
      result = a + b;
      break;
    case "pow":
      result = a * b;
      break;
    default:
      result = 0;
      break;
  }
  document.getElementById("output").value = result;
}

function setup() {
  createCanvas(800,500);
}

let x = 100;

function draw() {
  background(176, 224, 230);
  stroke(100, 255, 0);
  strokeWeight(3);
  fill(120,120,120);
  ellipse(x, 100, 20 * 2);
}