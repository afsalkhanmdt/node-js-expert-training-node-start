const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.method, req.url);
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");

  if (req.url === "/") {
    res.end("Home");
  } else if (req.url === "/about") {
    res.end("About");
  } else {
    res.end("Not Found");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Server Started at port ", 8000);
});
