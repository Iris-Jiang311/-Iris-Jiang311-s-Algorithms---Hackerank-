class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }
}

/*
 *  Write code that adds an 'area' method to the Rectangle class' prototype
 */
// cannot use the arrow function!!! must be the function(){}
// !!!Arrow functions cannot be used as constructors. Calling them with new throws a TypeError . They also don't have access to the new.target keyword. Arrow functions cannot use yield within their body and cannot be created as generator functions.
Rectangle.prototype.area = function(w,h){
    return (this.w *this.h)
}

/*
 * Create a Square class that inherits from Rectangle and implement its class constructor
 */

// !!! Square 's area = width * width
// constructor then must have a super(width, width)
class Square extends Rectangle {
    constructor(w){
        super(w,w)
        this.w = w
    }
}


if (JSON.stringify(Object.getOwnPropertyNames(Square.prototype)) === JSON.stringify([ 'constructor' ])) {
    const rec = new Rectangle(3, 4);
    const sqr = new Square(3);
    
    console.log(rec.area());
    console.log(sqr.area());
} else {
    console.log(-1);
    console.log(-1);
}