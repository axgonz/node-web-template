import express from "./deps/deps";
import router from "./routes/router";

console.log("Node Express App");
console.log(` rootdir: ${__dirname}`);
console.log(`rootfile: ${__filename}`);

// read in .env variables
require("dotenv").config();
console.log(`apptitle: ${process.env.APP_TITLE}`);

// setup app (app.get - app.post - app.put - app.delete - app.all - app.use - app.listen)
const app = express();

// set the view engine to ejs
app.set("view engine", "ejs");

// define static content
app.use("/static", express.static(__dirname + "/public/assets"));

// setup routes
app.use(router);

// start app
app.listen(
  8080,
  () => console.log(` serving: http://localhost:8080`),
);
