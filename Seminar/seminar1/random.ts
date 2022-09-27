/* 

도전 과제 조건
1. Member, Dinner interface 만들고 타입 지정하기
2. organize 내부 로직 채우기

*/

const dinner = {
  member: [
    {
      name: "권세훈",
      group: "ob",
    },
    // 더 추가해주세요.
  ],
  shuffle(array) {
    array.sort(() => Math.random() - 0.5);
    return array;
  },
  organize(array) {
    this.shuffle(array);

    console.log(`결과 ${dinnerMember[0]}, ${dinnerMember[1]}`);
  },
};

dinner.organize(dinner.member);
