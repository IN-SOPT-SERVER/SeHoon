//* 파트원을 소개해주는 코드 만들기 실습
/*
 * ~~는 ~살이고 ~에 살고있고 ~~를 좋아합니다.
 */

//^ 1. 서버 파트원 소개하는 객체 만들기
const members: Array<Server> = [
  {
    name: "이종현",
    age: 19,
  },
  {
    name: "현세빈",
    age: 19,
  },
  {
    name: "강민재",
    age: 19,
  },
];

//^ 2. 파트원 소개 배열에 타입으로 지정할 인터페이스 생성 및 타입 지정
interface Server {
  name: string;
  age: number;
}

//^ 3. 모든 파트원 소개 출력하기!
members.map((member) => console.log(`${member.name}님은 ${member.age} 살 입니다.`));
