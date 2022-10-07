/* 
도전 과제 조건
1. Member, Dinner interface 만들고 타입 지정하기
2. organize 내부 로직 채우기
*/
interface Member {
    name:String,
    group:String,
}

interface Dinner {
    member:Member,
    shuffle:Function,
    organize:Function,
}

const dinner = {
  member: [
    {
      name: "권세훈",
      group: "ob",
    },
    {
      name: "이종현",
      group: "yb",
    },
     {
      name: "최가희",
      group: "yb",
    },
     {
      name: "장한빛",
      group: "yb",
    },
     {
      name: "한유진",
      group: "yb",
    },
     {
      name: "최가연",
      group: "ob",
    },
  ],
  shuffle(array) {
    array.sort(() => Math.random() - 0.5);
    return array;
  },
  organize(array) {
    this.shuffle(array);
    var total = this.member.length;
    var count = 0;
    var dinnerMember=this.member;

    for (var i = 0; i<total/2;i++){
      console.log(`결과 ${i+1}조: [${dinnerMember[count].group}] ${dinnerMember[count].name}, [${dinnerMember[count+1].group}] ${dinnerMember[count+1].name}`);
      count+=2;
    }
  },
};

dinner.organize(dinner.member);