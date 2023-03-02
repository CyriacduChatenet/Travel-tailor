import { ForgotPasswordDTO, ResetPasswordDTO, SigninDTO, SignupDTO } from '@travel-tailor/types';
import { useFetch } from '@travel-tailor/hooks';
import {
	API_FORGOT_PASSWORD_ROUTE,
	API_RESET_PASSWORD_ROUTE,
	API_SIGNIN_ROUTE,
	API_SIGNUP_ROUTE,
} from '@travel-tailor/constants';

const signin = async (signinCredentials: SigninDTO) => {
	return await useFetch.post(API_SIGNIN_ROUTE, signinCredentials);
};

const signup = async (signupCredentials: SignupDTO) => {
	return await useFetch.post(API_SIGNUP_ROUTE, signupCredentials);
};

const forgotPassword = async (forgotPasswordCredentials: ForgotPasswordDTO) => {
	return await useFetch.post(API_FORGOT_PASSWORD_ROUTE, forgotPasswordCredentials);
};

const resetPassword = async (resetPasswordCredentials: ResetPasswordDTO, resetToken: string) => {
	return await useFetch.protectedPost(API_RESET_PASSWORD_ROUTE, resetPasswordCredentials, resetToken);
};

export const AuthService = {
	signin,
	signup,
	forgotPassword,
	resetPassword,
};