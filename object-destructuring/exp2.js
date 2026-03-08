const arr = [ , 2];
const [b = 10, a = b] = arr;
// const [a = b, b = 10] = arr;
console.log(b, a); // 10, 2

/**
 * 
 * modern js:
 * const { a = b, b = 10} = obj;
 *  var _obj = obj;
    var a = _obj.a === undefined ? b : _obj.a;
    var b = _obj.b === undefined ? 10 : _obj.b;

    a = b // b not defined yet
 */