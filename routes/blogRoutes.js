const express = require('express');
const { createBlog, getBlogs, addComment } = require('../controllers/blogsController');
const { protect, restrictTo } = require('../middleware/auth');
const { validate } = require('../middleware/validate');
const blogSchema = require('../validation/blogValidation');

const router = express.Router();

router.get('/', getBlogs);
router.post('/', protect, restrictTo('tourist', 'admin'), validate(blogSchema), createBlog);
router.post('/:blogId/comments', protect, addComment);

module.exports = router;