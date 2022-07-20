class Circle extends Shape {

    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }

    calculateArea() {
        return 3.14 * this.radius * this.radius;
    }
}
let area = new Circle('red', 2);
console.log(area.calculateArea());