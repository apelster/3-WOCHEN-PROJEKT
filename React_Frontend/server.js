const express = require("express");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");

const app = express();
app.use(cors());

const links = {};

app.get("/generate_link", (req, res) => {
  const linkId = uuidv4();
  links[linkId] = true;
  res.json({ link: `http://3.70.29.185:5000/use_link/${linkId}` });
});

app.get("/use_link/:linkId", (req, res) => {
  const { linkId } = req.params;
  if (links[linkId]) {
    links[linkId] = false;
    res.redirect("http://3.70.29.185:3000/0-Freunde");
  } else {
    res
      .status(404)
      .send("This link is no longer valid or has already been used.");
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
