function foo() {
    class Figure {
        constructor(unit = 'cm') {
            this.units = unit
        }

        changeUnits(unit) {
            this.units = unit
        }
        converted(unit, radius) {
            let r = {
                'm': (radius) => radius * 0.01,
                'cm': (radius) => radius,
                'mm': (radius) => radius * 10,
            }
            return r[unit](radius)
        }
    }
    class Circle extends Figure {
        constructor(radius, units) {
            super(units)
            this.radius = radius
        }
        get area() {
            return Math.PI * super.converted(this.units, this.radius) ** 2
        }
        toString() {
            return `Figures units: ${this.units} Area: ${this.area} - radius: ${super.converted(this.units, this.radius)}`
        }
    }
    class Rectangle extends Figure {
        constructor(width, height, units) {
            super(units)
            this.width = width
            this.height = height
        }
        get area() {
            return super.converted(this.units, this.width) * super.converted(this.units, this.height)
        }
        toString() {
            return `Figures units: ${this.units} Area: ${this.area} - width: ${super.converted(this.units, this.width)}, height: ${super.converted(this.units, this.height)}`
        }
    }
    return {
        Figure,
        Circle,
        Rectangle
    }
}


let classes = foo();
let Figure = classes.Figure;
let Circle = classes.Circle;
let Rectangle = classes.Rectangle;

let c = new Circle(5);
console.log(c.area); // 78.53981633974483
console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5

let r = new Rectangle(3, 4, 'mm');
console.log(r.area); // 1200 
console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40

r.changeUnits('cm');
console.log(r.area); // 12
console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4

c.changeUnits('mm');
console.log(c.area); // 7853.981633974483
console.log(c.toString()) // Figures units: mm Area: 7853.981633974483 - radius: 50

