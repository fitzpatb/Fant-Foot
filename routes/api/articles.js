const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");

// Matches with "/api/books"
router.get("/all", articlesController.findAll)
  //.post(booksController.create);

// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;
