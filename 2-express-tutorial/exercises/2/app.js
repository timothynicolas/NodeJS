/*
Create 20-static-refactor.js. Take the file-reading approach from 2-http-app.js conceptually, but simplify it using the path module: instead of hardcoding content-type strings for each branch, write a small helper function getContentType(url) that uses path.extname(url) to return the correct content-type string (.html → text/html, .css → text/css, .svg → image/svg+xml, .js → text/javascript) — then use that helper inside your route branches instead of typing the content-type manually each time.

You can reuse the same readFileSync calls and if/else routing structure — just replace the manual content-type strings with calls to your new helper.

*/

const http = require("http");
const path = require("path");
const { readFileSync } = require("fs");

// get all files
const homePage = readFileSync("../../navbar-app/index.html");
const homeStyles = readFileSync("../../navbar-app/styles.css");
const homeImage = readFileSync("../../navbar-app/logo.svg");
const homeLogic = readFileSync("../../navbar-app/browser-app.js");

// defined once, outside the request handler, since it doesn't depend on req/res
const getContentType = (url) => {
  if (path.extname(url) === ".html") {
    return "text/html";
  }
  if (path.extname(url) === ".css") {
    return "text/css";
  }
  if (path.extname(url) === ".svg") {
    return "image/svg+xml";
  }
  if (path.extname(url) === ".js") {
    return "text/javascript";
  }
};

const server = http.createServer((req, res) => {
  const url = req.url;
  console.log(url);

  // home page
  if (url === "/") {
    res.writeHead(200, { "content-type": getContentType("/index.html") });
    res.write(homePage);
    res.end();
  }
  // about page
  else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>about page</h1>");
    res.end();
  }
  // styles
  else if (url === "/styles.css") {
    res.writeHead(200, { "content-type": getContentType(url) });
    res.write(homeStyles);
    res.end();
  }
  // image/logo
  else if (url === "/logo.svg") {
    res.writeHead(200, { "content-type": getContentType(url) });
    res.write(homeImage);
    res.end();
  }
  // logic
  else if (url === "/browser-app.js") {
    res.writeHead(200, { "content-type": getContentType(url) });
    res.write(homeLogic);
    res.end();
  }
  // 404
  else {
    res.writeHead(404, { "content-type": getContentType("/404.html") });
    res.write("<h1>page not found</h1>");
    res.end();
  }
});

server.listen(5000);