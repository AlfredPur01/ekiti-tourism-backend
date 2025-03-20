const { z } = require('zod');

const attractionSchema = z.object({
  name: z.string().min(2),
  description: z.string().min(10),
  location: z.string().min(2),
  entryFee: z.number().positive(),
  images: z.array(z.string()).optional(),
});

module.exports = attractionSchema;