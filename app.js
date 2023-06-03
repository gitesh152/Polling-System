const express = require("express"); //express instance
const app = express(); //creating app using express
const PORT = process.env.PORT || 8000; //using PORT 8000
const db = require("./config/mongoose"); //using custom mongoose configuration
const bodyParser = require("body-parser"); //using body-parser

app.use(bodyParser.json());

app.use("/", require("./routes/index")); //using router middleware

app.listen(PORT, (error) => {
  //listening on PORT 8000
  if (error) console.log(error);
  console.log(`Server started listening on port ${PORT}`);
});
