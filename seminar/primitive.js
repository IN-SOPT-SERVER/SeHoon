const sym1 =Symbol();
const sym2 = Symbol();
const sym3 = Symbol('foo');
const sym4 = Symbol("foo");

console.log(sym1 === sym1);  // true

//각각 다른 메모리에 할당되기 때문입니다 !!
console.log(sym1 === sym2);  // false
console.log(sym3 === sym4);  // false

var bar = "baz";
console.log(bar);        // baz
bar.toUpperCase();
console.log(bar);       // baz
var uppercase="baz".toUpperCase();   //BAZ
console.log(uppercase);       //BAZ