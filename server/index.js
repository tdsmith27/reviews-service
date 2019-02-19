const express = require("express");
const parser = require("body-parser");
const { join } = require("path");
const app = express();
const port = process.env.PORT || 3030;

const db = require(join(__dirname, "../database/index.js"));

app.use(express.static(join(__dirname, "../public")));
app.use(parser.json());

app.get("/products/:id/reviews", (req, res) => {
  let id = req.params.id;

  db.findById(id, (err, reviews) => {
    if (err) {
      console.log("error finding reviews by product_id");
      res.sendStatus(400);
    } else {
      res.json(reviews);
    }
  });
});

app.post("/products/reviews", (req, res) => {
  db.save(req.body, (err, data) => {
    if (err) console.log("we got an error", err);
    else {
      console.log("yo this may have done just worked");
      res.sendStatus(201);
    }
  });
});

app.listen(port, () => console.log(`listening on port ${port}`));
