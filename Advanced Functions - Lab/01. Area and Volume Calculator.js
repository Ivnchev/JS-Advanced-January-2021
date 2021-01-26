function area() {
    return this.x * this.y;
};
function vol() {
    return this.x * this.y * this.z;
};
function foo(area, vol, input) {
    return JSON.parse(input).map( x => {
        return {
            area: Math.abs(area.call(x)),
            volume: Math.abs(vol.call(x))
        }
    })
}
console.log(foo(area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`));