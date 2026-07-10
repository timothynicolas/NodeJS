const { createReadStream } = require("fs");

const stream = createReadStream("../../content/big.txt");

let chunkCount = 0;

stream.on("data", (result) => {
  chunkCount += 1;
});
stream.on("end", () => {
  console.log(`Count: ${chunkCount}`);
});

stream.on("error", (err) => console.log(err));
