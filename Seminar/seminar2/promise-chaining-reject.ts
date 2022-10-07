Promise.resolve(true)
  .then((response) => {
    throw new Error("비동기 처리 중 에러 발생!");
  })
  .then((response) => {
    console.log(response);
    return Promise.resolve(true);
  })
  .catch((error) => {
    console.log(error.message);
  });
