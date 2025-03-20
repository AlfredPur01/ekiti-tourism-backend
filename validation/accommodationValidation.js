const { z } = require('zod');

const accommodationSchema = z.object({
  type: z.enum(['hotel', 'shortlet', 'bar']),
  name: z.string().min(2),
  description: z.string().min(10),
  location: z.string().min(2),
  price: z.number().positive(),
  amenities: z.array(z.string()).optional(),
  images: z.array(z.string()).optional(),
});

module.exports = accommodationSchema;