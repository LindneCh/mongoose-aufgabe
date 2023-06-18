const express = require("express");
const router = express.Router();

// Require our controllers.
const author_controller = require("../controllers/authorController");


// ... Viel viel Code entfernt


/// AUTHOR ROUTES ///

router.get("/author/:id", author_controller.author_detail);

router.get("/authors", author_controller.author_list);

module.exports = router;
