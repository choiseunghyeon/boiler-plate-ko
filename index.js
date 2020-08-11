const express = require("express");
const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://dbUser:1234@youtubeclone.dhwnu.mongodb.net/<dbname>?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
// mongodb+srv://dbUser:1234@youtubeclone.dhwnu.mongodb.net/<dbname>?retryWrites=true&w=majority
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
