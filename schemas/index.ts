import email from 'next-auth/providers/email';
import * as z from 'zod';

export const LoginSchema = z.object({
    email: z.string().email({
        message: 'Email is Required'
    }),
    password: z.string().min(1, {
        message: 'Password is Required'
    })
});

export const SignUpSchema = z.object({
    email: z.string().email({
        message: 'Email is Required'
    }),
    password: z.string().min(6, {
        message: 'Password must be at least 6 characters long'
    }),
    name: z.string().min(1, {
        message: 'Name is Required'
    })
});