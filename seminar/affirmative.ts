//angle-bracket
let str:any = "최가희";
let strLength : number = (<string>str).length;
console.log(`${typeof strLength}, ${strLength}`); //number,3

//as
let str2:any = '이종현';
let str2Lnength: number =(<string>str2).length;
console.log(`${typeof str2Lnength}, ${str2Lnength}`); //number,3