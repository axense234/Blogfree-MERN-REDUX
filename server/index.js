const express = require("express");
const app = express();

const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  return res.status(200).json({ msg: "Hello", content: "Home page" });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});
