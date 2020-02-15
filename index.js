const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const initializeDB = require("./db.js");
const PORT = 5000;

const start = async () => {
  const controller = await initializeDB();

  app.get("/users", async (req, res) => {
    const users = await controller.getUsers();
    res.json(users);
  });

  app.get("/users/add", async (req, res) => {
    const username = req.query.username;
    const password = req.query.password;

    let errors = [];
    if (username == "" || password == "") {
      errors.push({
        status: 403,
        error: true,
        message:
          "you cannot create a user without providing a user name or password"
      });
    }

    if (errors.length > 0) {
      res.json({ status: 403, error: true, message: errors });
    } else {
      try {
        const addUser = await controller.addUser({ username, password });
        res.json({ id: addUser, username: username, password: password });
      } catch (e) {
        res.json({ status: 403, error: true, message: e.message });
      }
    }
  });

  app.get("/users/delete/:id", async (req, res) => {
    const id = req.params.id;
    try {
      const del = await controller.deleteUser(id);
      res.json({ del });
    } catch (e) {
      res.json({ status: 403, error: true, message: e.message });
    }
  });
  app.get("/users/update/:id", async (req, res) => {
    const id = req.params.id;
    const {username, password}=req.query;
    try {
      const updateUser = await controller.updateUser(id,{ username, password });
      res.json({ updateUser });
    } catch (e) {
      res.json({ status: 403, error: true, message: e.message });
    }
  });

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

app.get("/faq/add", async (req, res) => {
  const question = req.query.question;
  const answer = req.query.answer;

  let errors = [];
  if (question == "" || answer == "") {
    errors.push({
      status: 403,
      error: true,
      message:
        "you cannot create a faq without providing a question and answer"
    });
  }

  if (errors.length > 0) {
    res.json({ status: 403, error: true, message: errors });
  } else {
    try {
      const addFaq = await controller.addFaq({ question, answer });
      res.json({ id: addFaq, question: question, answer: answer });
    } catch (e) {
      res.json({ status: 403, error: true, message: e.message });
    }
  }
});

app.get("/faq/delete/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const deleteFaq = await controller.deleteFaq(id);
    res.json({ deleteFaq });
  } catch (e) {
    res.json({ status: 403, error: true, message: e.message });
  }
});
app.get("/faq/update/:faqID", async (req, res) => {
  const faqID = req.params.faqID;
  const {question, answer}=req.query;
  try {
    const updateFaq = await controller.updateFaq(faqID,{ question, answer });
    res.json({ updateFaq });
  } catch (e) {
    res.json({ status: 403, error: true, message: e.message });
  }
});

}
app.listen(PORT, () => 
  console.log(`Server running at: http://localhost:${PORT}/`)
);
start();
