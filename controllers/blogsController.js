const Blog = require('../models/Blog');

const createBlog = async (req, res) => {
  const blog = await Blog.create({ ...req.body, author: req.user.id });
  res.status(201).json(blog);
};

const getBlogs = async (req, res) => {
  const blogs = await Blog.find().populate('author', 'name');
  res.json(blogs);
};

const addComment = async (req, res) => {
  const { blogId } = req.params;
  const { text } = req.body;
  const blog = await Blog.findById(blogId);
  if (!blog) return res.status(404).json({ message: 'Blog not found' });

  blog.comments.push({ user: req.user.id, text });
  await blog.save();
  res.status(201).json(blog);
};

module.exports = { createBlog, getBlogs, addComment };