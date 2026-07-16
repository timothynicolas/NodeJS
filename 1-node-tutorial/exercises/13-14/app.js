const EventEmitter = require("events");

const orderEmitter = new EventEmitter();

orderEmitter.on("orderPlaced", (id, item) => {
  console.log(`Order #${id} received for ${item}`);
});

orderEmitter.on("orderPlaced", (id) => {
  console.log(`Sending confirmation email for order #${id}`);
});

orderEmitter.on("orderCancelled", (id) => {
  console.log(`Order #${id} was cancelled`);
});

orderEmitter.emit("orderPlaced", 101, "laptop");
