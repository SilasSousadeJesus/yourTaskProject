const mongoose = require("mongoose");

async function main() {
  await mongoose.set("strictQuery", false);
  await mongoose.connect(process.env.MONGODB_URI);
}

main()
  .then(() => console.log("Conectado ao MongoDB"))
  .catch((e) => console.log(e));

module.exports = mongoose;
