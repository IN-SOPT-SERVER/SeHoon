//^ === 원시 타입 ===
//? Number
let a = 31;
console.log(typeof a);

//? String
//? ES6부터 지원하는 Template literal!
const myName = "하이와이요";
console.log(`${myName} 입니다.`);

//? Boolean

//? Symbol
const sym1 = Symbol();
const sym2 = Symbol();
const sym3 = Symbol("foo");
const sym4 = Symbol("foo");

console.log(sym1 === sym1); // true

console.log(sym1 === sym2); // false
console.log(sym3 === sym4); // false

//^ === 객체 타입 ===
//? object
const user = {
  email: "devkwonsehoon@naver.com",
  name: "권세훈",
  favorite: ["파스타", "회", "햄버거"],
  introduce: function () {
    console.log(`${this.name}입니다. ${this.favorite} 좋아`);
  },
  getFavoriteFoods: function () {
    this.favorite.forEach((food) => {
      console.log(`${food} 맛 있 어`);
    });
  },
};

//? array
const arr1 = ["Hi", 10, true];
const arr2 = Array(1, null, "우와!", false, { sopt: "Server" });

arr1.map((item) => console.log("item1 :", item));
arr2.map((item) => console.log("item2 :", item));

//? function
//& 함수 선언식 (호이스팅의 영향을 받습니다.)
function sum(a, b) {
  return a + b;
}

//& 함수 표현식 (호이스팅의 영향을 받지 않습니다.)
const sum = (a, b) => {
  return a + b;
};

const add = (a, b) => a + b;
const hello = (name) => console.log(`${name}, hello!`);
const info = (name, age) => ({ name, age });
