interface SOPT {
    name : string,
    age : number,
    inSopt:boolean
}

//error
const gaheeInfo:SOPT{
    name:'gahee',
    age:24,
    money:1000000000000000000000000000000000000000000000
}

//배열에 SOPT인터페이스 사용
const infos : SOPT[] = [
    {
        name:'gahee',
        age:24,
        inSopt:true

    },
    {
        name:'gayeon',
        age:24,
        inSopt:true    },

    {
        name:'yunseo',
        age:23,
        inSopt:true
    },
]