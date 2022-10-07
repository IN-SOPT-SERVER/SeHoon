//함수 선언식
function sum(a,b) {
	return a+b;
}

//함수 표현식
const sum = (a,b) => {
	return a+b;
}

//arrow function
const add  = (a ,b ) => a+b; 
const hello = name => console.log(`${name}, hello!)
const info = (name, age) => ({name,age})