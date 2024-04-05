import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from API! ");
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server started on port ${process.env.PORT || 3000}`);
});
