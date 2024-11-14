function double(x) {
    return x * 2;
}
function square(x) {
    return x * x;
}
function compose(f, g) {
    return function(x) {
        return g(f(x));
    };
}
const doubleThenSquare = compose(double, square);
console.log(doubleThenSquare(3));