const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://beomadmin:sbj9798*@be-project.ojuaw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("MongDB connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`${port}`));
