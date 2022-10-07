const http = require("http");

const port = 3000;

http
  .createServer((req, res) => {
    res.write("<h1>IN SOPT SERVER!</h1>");
    res.end("<p>awesome</p>");
  })
  .listen(port, () => {
    console.log(`${port} 번 포트에서 대기중 !`);
  });
