class Shape {
  constructor(color, initX, initY) {
    this.color = color;
    this.initX = initX;
    this.initY = initY;
  }
  // getter
  get getColor() {
    return console.log(`Color: ${this.color}`);
  }
  // setter
  set setColor(val) {
    this.color = val;
  }
  // getter
  get getCoords() {
    return console.log(`X: ${this.initX}, Y ${this.initY}`);
  }
  // setter
  moveTo(newX, newY) {
    this.initX = newX;
    this.initY = newY;
  }
}

class Rectangle extends Shape {
  constructor(color, initX, initY, initWidth, initHeight) {
    super(color, initX, initY);
    this.color = color;
  }
  // setter
  set setWidth(newWidth){
    this.initWidth = newWidth;
  }
  // setter
  set setHeight(newHeight) {
    this.initHeight = newHeight;
  }
  // getter
  get getDims() {
    return console.log(`Width: ${this.initWidth}, Height: ${this.initHeight}`);
  }
  // getter
  get draw() {
    return console.log(`Drawing rectangle at:
      (x: ${this.initX}, y: ${this.initY})
      With dimentions:
        width: ${this.initWidth}
        height: ${this.initHeight}
      Filled with color: ${this.color}`);
  }
}

class Circle extends Shape {
  constructor(color, initX, initY, initRadius) {
    super(color, initX, initY);
  }
  // getter
  get getRadius() {
    return console.log(`Radius: ${this.initRadius}`);
  }
  // setter
  set setRadius(val) {
    this.initRadius = val;
  }
  // getter
  get draw() {
    return console.log(`Drawing a Circle at:
      (x: ${this.initX}, y: ${this.initY})
      With dimentions:
       radius: 250
      Filled with color: ${this.color}`);
  }
}

let button = document.getElementById('submit');
let newColor = document.getElementById('inputColor');
let newInitX = document.getElementById('inputInitX');
let newInitY = document.getElementById('inputInitY');
let newWidth = document.getElementById('inputInitWidth');
let newHeight = document.getElementById('inputInitHeight');
let newRadius = document.getElementById('inputInitRadius');

button.addEventListener("click", () => {
	let userShape = new Shape (newColor.value, newInitX.value, newInitY.value);
  userShape.setColor = newColor.value;
  userShape.getColor;
  userShape.moveTo(newInitX.value, newInitY.value);
  userShape.getCoords;

  let userRectangle = new Rectangle (newColor.value, newInitX.value, newInitY.value, newWidth.value, newHeight.value);
  userRectangle.setWidth = newWidth.value;
  userRectangle.setHeight = newHeight.value;
  userRectangle.getDims;
  userRectangle.draw;

  let userCircle = new Circle (newColor.value, newInitX.value, newInitY.value, newWidth.value, newHeight.value)
  userCircle.setRadius = newRadius.value;
  userCircle.getRadius;
  userCircle.draw;
});
