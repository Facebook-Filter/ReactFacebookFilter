const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const initializeDB = require("./db.js");
const PORT = 5000;

const start = async () => {
  const controller = await initializeDB();

app.get("/review", async(req, res) => {
  const review = await controller.getReviews();
    res.json(review);
});

app.get("/review/add", async (req, res) => {
  const username = req.query.username;
  const email = req.query.email;
  const review=req.query.review;

  let errors = [];
  if (username == "" || email == "" || review=='') {
    errors.push({
      status: 403,
      error: true,
      message:
        "you cannot create a review without providing a username, email and review"
    });
  }

  if (errors.length > 0) {
    res.json({ status: 403, error: true, message: errors });
  } else {
    try {
      const addReview = await controller.addReview({ username, email, review });
      res.json({ id: addReview, username: username, email: email, review:review });
    } catch (e) {
      res.json({ status: 403, error: true, message: e.message });
    }
  }
});

app.get("/review/delete/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const deleteReview = await controller.deleteReview(id);
    res.json({ deleteReview });
  } catch (e) {
    res.json({ status: 403, error: true, message: e.message });
  }
});

app.get('/faq', async(req,res)=>{
  const faq=await controller.getFaq();
  res.json(faq);
})

}
app.listen(PORT, () => 
  console.log(`Server running at: http://localhost:${PORT}/`)
);
start();
