//object vs Object
const foo1 = (something:object) : void =>{
    console.log(something)
}
const foo2 = (something:Object) : void => {
    console.log(something)
}
foo1('boom')
foo2('boom')


//배열 예제 
let numbers: number[] = [1,2,3];
const strings : Array<String>= ['hi','hello']

//자바스크립트 객체와 완전히 동일하다.
const objArray1: Object[] = [
        {firstname : 'choi'},
        {secondename : 'gahee'}
]

// 원시 타입이 아닌 타입hname만 할당할 수 있다.
const objArray2 : object[] = [
    {item1: 'first'},
    {item2: 'second'}
]

