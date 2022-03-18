const express = require("express");
const router = express.Router();
const catchAsync = require("../utils/catchAsync");
const Blog = require("../models/blog");
const { isLoggedIn, isAuthor } = require("../middleware");

router.get(
  "/blogs",
  catchAsync(async (req, res) => {
    const blogs = await Blog.find({}).populate("author");
    res.send(blogs);
  })
);

module.exports = router;
