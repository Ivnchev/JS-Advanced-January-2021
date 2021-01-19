function foo(x,y, color) {
    return {
        width : x,
        height : y,
        color: color[0].toUpperCase() + color.slice(1),
        calcArea() {
            return this.width * this.height
        }
    }
}

let rect = foo(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
