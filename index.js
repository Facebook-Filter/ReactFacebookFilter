const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const initializeDB = require("./db.js");
const PORT = 5000;

const start = async () => {
  const controller = await initializeDB();

app.get("/", (req, res) => {
  res.json({ message: "ok" });
});



}
app.listen(PORT, () => 
  console.log(`Server running at: http://localhost:${PORT}/`)
);
start();
