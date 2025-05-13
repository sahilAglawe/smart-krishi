const dotenv = require("dotenv");
dotenv.config({
  path: "./.env",
});
const app = require("./app.js");
const { connectedToDb } = require("./db/db.js");
const PORT = process.env.PORT || 5555;

connectedToDb()
  .then(() => {
    app.on("error", (err) => {
      console.log("Error: ", err);
    });
    app.listen(PORT, () => console.log(`Server started at port: ${PORT}`));
  })
  .catch((err) => {
    console.log("MongoDB connection error !!! ", err);
  });
