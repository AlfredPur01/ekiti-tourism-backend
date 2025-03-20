const { z } = require('zod');

const blogSchema = z.object({
  title: z.string().min(2),
  content: z.string().min(10),
});

module.exports = blogSchema;