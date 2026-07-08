const http = require("http");

const server = http.createServer((req, res) => {
  const navBar = `
    <a href="/">Home</a>  
    <a href="/about">About</a>  
    <a href="/contact">Contact</a>  
  `;
  if (req.url === "/") {
    return res.end(`
      <h1>HOME</h1>
      ${navBar}
    `);
  }

  if (req.url === "/about") {
     return res.end(`
      <h1>ABOUT</h1>
      ${navBar}
    `);
  }

  if (req.url === "/contact") {
    return res.end(`
      <h1>CONTACT</h1>
      ${navBar}
    `);
  }

   return res.end(`
      <h1>OOPS</h1>
      <p>We can't seem to find the page that you were looking for :(</p>
      ${navBar}
    `);
});

server.listen(3000);
console.log("Server is listening to port 3000");
