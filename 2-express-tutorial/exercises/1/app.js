const http = require("http");

const server = http.createServer((req, res) => {
  const servePage = (statusCode, textType, page) => {
    res.writeHead(statusCode, { "content-type": `text/${textType}` });
    res.write(`<h1>${page}</h1>`);
    res.end();
  };

  // console.log(req.method)
  const url = req.url;

  if (url === "/") {
    servePage(200, "html", "Home Page");
  } else if (url === "/about") {
    servePage(200, "html", "About Page");
  } else {
    servePage(404, "html", "Content Not Found");
  }
});

server.listen(5000);
