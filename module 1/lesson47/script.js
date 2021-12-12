'use strict'

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  calcArea() {
    return this.height * this.height
  }
}

const squere = new Rectangle(10, 10);
console.log(square.calcArea());

// class ColoredRegtangleWhithText extends Rectangle {
//   constructor(height, width, text, bgColor) {
//     super(); //суперконструктор родителя
//     this.text = text,
//       this.bgColor = bgColor;
//   }
//   showMyProps() {
//     console.log("-----");
//   }
// }

const div = new ColoredRegtangleWhithText(25, 10, "hellow", 'red');


class ColoredRectangleWithText extends Rectangle {
  constructor(height, width, text, bgColor) {
    super(height, width);
    this.text = text;
    this.bgColor = bgColor;
  }

  showMyProps() {
    console.log('');
  }
}

const div = new ColoredRectangleWithText(25, 10, 'etst', 'red');
div.showMyProps();
console.log(div.calcArea());