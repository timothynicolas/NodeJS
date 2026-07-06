const { writeFile, readFile, writeFileSync, readFileSync } = require("fs");

writeFileSync("./log.txt", "Sync write complete");
console.log("Sync Write Complete");

writeFile("./log-async.txt", "Async write complete", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log("Async write complete");
});

console.log("This runs after both writes are triggered.");
