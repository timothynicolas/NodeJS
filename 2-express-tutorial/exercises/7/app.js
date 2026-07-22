const express = require("express");
const app = express();
const { books } = require("./data");

app.get("/api/books", (req, res) => {
  return res.json(books);
});

app.get("/api/books/search", (req, res) => {
  const { genre } = req.query;
  let sortedBooks = [...books];

  if (genre) {
    sortedBooks = sortedBooks.filter((book) => {
      return book.genre.startsWith(genre);
    });
  }

  if (sortedBooks.length < 1) {
    return res.status(200).json({ success: true, data: [] })
  }

  return res.json(sortedBooks);
});

app.get("/api/books/:bookID", (req, res) => {
  const { bookID } = req.params;

  const singleBook = books.find((book) => book.id === Number(bookID));

  if (!singleBook) {
    return res.status(404).send("Book Does Not Exist");
  }

  return res.json(singleBook);
});



app.listen(7000, () => {
  console.log("server is listening to port 7000");
});
