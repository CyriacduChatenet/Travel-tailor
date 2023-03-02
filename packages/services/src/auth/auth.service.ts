import { SigninDTO, SignupDTO } from '@travel-tailor/types';
import { useFetch } from '@travel-tailor/hooks';
import { API_SIGNIN_ROUTE, API_SIGNUP_ROUTE } from '@travel-tailor/constants';

const signin = async (signinCredentials: SigninDTO) => {
    return await useFetch.post(API_SIGNIN_ROUTE, signinCredentials);
};

const signup = async (signupCredentials: SignupDTO) => {
    return await useFetch.post(API_SIGNUP_ROUTE, signupCredentials);
};

const forgotPassword = async () => {};

const resetPassword = async () => {};

export const AuthService = {
    signin,
    signup,
    forgotPassword,
    resetPassword,
};