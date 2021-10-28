const express = require("express");
const app = express();
const path = require("path");

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });
let greeting = (req, res, next) => {
  var date = new Date();
  console.log(date);
  if (
    date.getDay() > 0 &&
    date.getDay() < 6 &&
    date.getHours() >= 9 &&
    date.getHours() < 17
  ) {
    console.log("you are welcome");
    next();
  } else {
    // res.redirect("/offlinepage");
    res.send("We are availble monday => friday only 9h=> 17h");
  }
};
app.use(greeting, express.static(path.join(__dirname, "public")));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
