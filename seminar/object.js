//배열 
const arr1 = ["H1", 10, true];
const arr2 = Array(1, null, "우와", false , {sopt:"server"});
arr1.map((item) => console.log("item1 : ", item ));
arr2.map((item) => console.log("item2 : " ,item));



const user = {
    email : "1234@naver.com",
    name:  "gahee",
    favorite : ["회", "치킨", "햄버거", "닭"],
    
    introduce : function (){
        console.log(`안녕하세요 저는 ${this.name}입니다. ${this.favorite}좋아`);
    },
    
    getFavoriteFoods: function(){
        this.favorite.forEach((food)=>{
            console.log(`${food} 맛 있 어! `);
        })
    }
}
console.log(user.introduce());
console.log(user.email);
console.log(user.getFavoriteFoods());