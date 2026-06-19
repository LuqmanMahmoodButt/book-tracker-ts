import { z } from 'zod';

export const bookSchema = z.object({
    title: z.string().trim().min(1, 'Title is required').max(200),
    author: z.string().trim().min(1, 'Author is required').max(200),
    status: z.enum(['want_to_read', 'currently_reading', 'finished']),
    rating: z.number().int().min(1).max(5).optional()
}).refine(
    (data) => data.rating === undefined || data.status === 'finished',
    { message: "Rating can only be set if the status is 'finished'", path: ['rating']}
);

export type BookInput = z.infer<typeof bookSchema>;