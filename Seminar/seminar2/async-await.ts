//* async-await

//? 함수 선언식
async function foo1() {}

//? 함수 표현식
const foo2 = async () => {};

let asyncFunc1 = (something: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`resolved ${something} from func1 ...`);
    }, 1000);
  });
};

let asyncFunc2 = (something: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`resolved ${something} from func2 ...`);
    }, 1500);
  });
};

const promiseMain = (): void => {
  asyncFunc1("test")
    .then((resolvedData: string) => {
      console.log(resolvedData);
      return asyncFunc2("testttt");
    })
    .then((resolvedData: string) => {
      console.log(resolvedData);
    });
};

const main = async (): Promise<void> => {
  let result = await asyncFunc1("wow!");
  console.log(result);
  result = await asyncFunc2("holy moly");
  console.log(result);
};

