const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 4500;

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
