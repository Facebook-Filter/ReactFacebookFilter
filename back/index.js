const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const app = express();
const AuthenticationController = require("./AuthenticationController");
const LoginMiddleware = require("./loginmiddleware");
const jsonWebToken = require('jsonwebtoken')
const jwt_secret = require('../Private').key
app.use(cors());
app.use(bodyparser.json());
app.use(express.urlencoded({ extended: true }));
const initializeDB = require("./db.js");
const PORT = 5000;


const checkAuth = (req, res, next) => {
  try {
    let token = '';
    if (req.body.token) {
      token = req.body.token;
    } else if (req.query.token) {
      token = req.query.token
    }
    const tokenDecodedData = jsonWebToken.verify(token, jwt_secret); 4
    console.log('tokenDecodedData')
    next();
  } catch (error) {
    console.log(error.message)
    res.json({
      error: true,
      data: error
    });
  }
}

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
          "you cannot create a user without providing a user name and password"
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
    const { username, password } = req.query;
    try {
      const updateUser = await controller.updateUser(id, { username, password });
      res.json({ updateUser });
    } catch (e) {
      res.json({ status: 403, error: true, message: e.message });
    }
  });

  app.get("/reviews", async (req, res) => {
    const review = await controller.getReviews();
    res.json(review);
  });

  app.get("/reviews/add", async (req, res) => {
    const username = req.query.username;
    const email = req.query.email;
    const review = req.query.review;

    let errors = [];
    if (username == "" || email == "" || review == '') {
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
        res.json({ revID: addReview, username: username, email: email, review: review });
      } catch (e) {
        res.json({ status: 403, error: true, message: e.message });
      }
    }
  });

  app.get("/reviews/delete/:revID", async (req, res) => {
    const revID = req.params.revID;
    try {
      const deleteReview = await controller.deleteReview(revID);
      res.json({ deleteReview });
    } catch (e) {
      res.json({ status: 403, error: true, message: e.message });
    }
  });

  app.get('/faq', async (req, res) => {
    const faq = await controller.getFaq();
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
        res.json({ faqID: addFaq, question: question, answer: answer });
      } catch (e) {
        res.json({ status: 403, error: true, message: e.message });
      }
    }
  });

  app.get("/faq/delete/:faqID", async (req, res) => {
    const faqID = req.params.faqID;
    try {
      const deleteFaq = await controller.deleteFaq(faqID);
      res.json({ deleteFaq });
    } catch (e) {
      res.json({ status: 403, error: true, message: e.message });
    }
  });
  app.get("/faq/update/:faqID", async (req, res) => {
    const faqID = req.params.faqID;
    const { question, answer } = req.query;
    try {
      const updateFaq = await controller.updateFaq(faqID, { question, answer });
      res.json({ updateFaq });
    } catch (e) {
      res.json({ status: 403, error: true, message: e.message });
    }
  });

  app.get('/support', async (req, res) => {
    const support = await controller.getSupport();
    res.json(support);
  })


  app.get("/support/add", async (req, res) => {
    const email = req.query.email;
    const question = req.query.question;

    let errors = [];
    if (email == "" || question == "") {
      errors.push({
        status: 403,
        error: true,
        message:
          "you cannot create a support without providing a question and email"
      });
    }

    if (errors.length > 0) {
      res.json({ status: 403, error: true, message: errors });
    } else {
      try {
        const addSupport = await controller.addSupport({ email, question });
        res.json({ questID: addSupport, email: email, question: question });
      } catch (e) {
        res.json({ status: 403, error: true, message: e.message });
      }
    }
  });

  app.get("/support/delete/:questID", async (req, res) => {
    const questID = req.params.questID;
    try {
      const deleteSupport = await controller.deleteSupport(questID);
      res.json({ deleteSupport });
    } catch (e) {
      res.json({ status: 403, error: true, message: e.message });
    }
  });
  app.get("/support/update/:questID", async (req, res) => {
    const questID = req.params.questID;
    const { email, question } = req.query;
    try {
      const updateSupport = await controller.updateSupport(questID, { email, question });
      res.json({ updateSupport });
    } catch (e) {
      res.json({ status: 403, error: true, message: e.message });
    }
  });





  app.get("/contacts", async (req, res) => {
    const contacts = await controller.getContacts();
    res.json(contacts);
  });

  app.get("/contacts/add", async (req, res) => {
    const nameChosen = req.query.nameChosen;
    const email = req.query.email;
    const message = req.query.message;

    let errors = [];
    if (nameChosen == "" || email == "" || message == '') {
      errors.push({
        status: 403,
        error: true,
        message:
          "you cannot create a contact us without providing a nameChosen, email and message"
      });
    }

    if (errors.length > 0) {
      res.json({ status: 403, error: true, message: errors });
    } else {
      try {
        const addContacts = await controller.addContacts({ nameChosen, email, message });
        res.json({ contID: addContacts, nameChosen: nameChosen, email: email, message: message });
      } catch (e) {
        res.json({ status: 403, error: true, message: e.message });
      }
    }
  });

  app.get("/contacts/delete/:contID", async (req, res) => {
    const contID = req.params.contID;
    try {
      const deleteContacts = await controller.deleteContacts(contID);
      res.json({ deleteContacts });
    } catch (e) {
      res.json({ status: 403, error: true, message: e.message });
    }
  });



  app.get('/features', async (req, res) => {
    const features = await controller.getFeatures();
    res.json(features);
  })


  app.get("/features/add", async (req, res) => {
    const title = req.query.title;
    const image = req.query.image;
    const description = req.query.description;

    let errors = [];
    if (title == "" || image == "" || description == "") {
      errors.push({
        status: 403,
        error: true,
        message:
          "you cannot create a feature without providing a title, image, and description"
      });
    }

    if (errors.length > 0) {
      res.json({ status: 403, error: true, message: errors });
    }
    else {
      try {
        const addFeature = await controller.addFeature({ title, image, description });
        res.json({ featID: addFeature, title: title, image: image, description: description });
      } catch (e) {
        res.json({ status: 403, error: true, message: e.message });
      }
    }
  });

  app.get("/features/delete/:featID", async (req, res) => {
    const featID = req.params.featID;
    try {
      const deleteFeature = await controller.deleteFeature(featID);
      res.json({ deleteFeature });
    } catch (e) {
      res.json({ status: 403, error: true, message: e.message });
    }
  });
  app.get("/features/update/:featID", async (req, res) => {
    const featID = req.params.featID;
    const { title, image, description } = req.query;
    console.log(req.query);
    try {
      const updateFeature = await controller.updateFeature(featID, { title, image, description });
      res.json({ updateFeature });
    } catch (e) {
      res.json({ status: 403, error: true, message: e.message });
    }
  });


  app.get('/blog', checkAuth, async (req, res) => {
    const blog = await controller.getBlog();
    res.json({
      data: blog
    });
  })


  app.get("/blog/add", async (req, res) => {
    const title = req.query.title;
    const blogText = req.query.blogText;

    let errors = [];
    if (title == "" || blogText == "") {
      errors.push({
        status: 403,
        error: true,
        message:
          "you cannot create a blog without providing a title and a text for the blog"
      });
    }

    if (errors.length > 0) {
      res.json({ status: 403, error: true, message: errors });
    }
    else {
      try {
        const addBlog = await controller.addBlog({ title, blogText });
        res.json({ blogID: addBlog, title: title, blogText: blogText });
      } catch (e) {
        res.json({ status: 403, error: true, message: e.message });
      }
    }
  });

  app.get("/blog/delete/:blogID", async (req, res) => {
    const blogID = req.params.blogID;
    try {
      const deleteBlog = await controller.deleteBlog(blogID);
      res.json({ deleteBlog });
    } catch (e) {
      res.json({ status: 403, error: true, message: e.message });
    }
  });
  app.get("/blog/update/:blogID", async (req, res) => {
    const blogID = req.params.blogID;
    const { title, blogText } = req.query;
    try {
      const updateBlog = await controller.updateBlog(blogID, { title, blogText });
      res.json({ updateBlog });
    } catch (e) {
      res.json({ status: 403, error: true, message: e.message });
    }
  });

  app.post("/login", async (req, res) => {
    console.log(req.body)
    const userCredentials = {
      username: req.body.username,
      password: req.body.password
    }
    const controller = new AuthenticationController();
    const login = new LoginMiddleware(userCredentials);
    try {
      const token = await login.loginUser(controller);
      res.json({
        jwt: token,
        status: 200
      })
    } catch (error) {
      res.json({
        message: error.message,
        status: 404
      })
    }
  });

}

app.get('/verify', checkAuth, (req, res, next) => {

  res.json({
    status: 200,

  })
})
start();


app.listen(PORT, () =>
  console.log(`Server running at: http://localhost:${PORT}/`)
);