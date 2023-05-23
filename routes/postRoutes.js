const express = require("express");
const router = express.Router();

const { createPost , updatePost ,deletePost } = require("../controller/postController");

router.post("/post",createPost)
router.put("/post/:id",updatePost)
router.delete("/post/delete/:id",deletePost)

module.exports = router;