import {z} from 'zod'

export const createTaskScehma = z.object({
    title: z.string({
        required_error: 'Title is required'
    }),
    description : z.string({
        required_error: 'Description required'
    }),
    date: z.string().datetime().optional()
});