// Take the raw HTTP code above and refactor it using the helper function idea from Q17 — write a sendResponse(res, statusCode, contentType, content) function, then rewrite all three branches (/, /about, 404) to call it instead of repeating writeHead/write/end three times.

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
