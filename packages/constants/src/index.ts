import dotenv from 'dotenv';

dotenv.config();

export const API_SIGNIN_ROUTE = `${process.env.API_URL}/auth/signin`;
export const API_SIGNUP_ROUTE = `${process.env.API_URL}/auth/signup`;