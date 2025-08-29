var myObject = {
    foo: "bar",
    func: function(){
        var self = this;
        console.log("outer fun: this.foo = " + this.foo); // "bar"
        console.log("outer fun: self.foo = " + self.foo); // "bar"
        // 'this' refers to the object myObject, and 'self' is a reference to the same object.
        // In this context, 'this' and 'self' refer to the same object.
        (function(){
            console.log("inner fun: this.foo = " + this.foo); // undefined, because 'this' refers to the global object or undefined in strict mode
            console.log("inner fun: self.foo = " + self.foo); // "bar", because 'self' refers to the outer function's context
            // In this context, 'this' does not refer to myObject, but 'self' does.
            // 'this' inside the inner function does not refer to myObject, but 'self' does, because 'self' is a reference to the outer function's context.
        }())
    }
}

myObject.func();