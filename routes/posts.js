const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const postsController = require("../controllers/posts");
const { ensureAuth, ensureGuest } = require("../middleware/auth");
const commmentsController = require("../controllers/comments")

//Post Routes - simplified for now
router.get("/:id", ensureAuth, postsController.getPost);


router.post("/createPost", upload.single("file"), postsController.createPost);

router.post("/createComment", commmentsController.createComments);

router.put("/likePost/:id", postsController.likePost);

router.delete("/deletePost/:id", postsController.deletePost);

module.exports = router;
