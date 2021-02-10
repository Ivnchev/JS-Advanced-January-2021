function foo(x,y, color) {
  return {
      width : x,
      height : y,
      color: color,
      calcArea() {
          return this.width * this.height
      }
  }
}


console.log( foo([[10,5], [3,20], [5,12]]) )