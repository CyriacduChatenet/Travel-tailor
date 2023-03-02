import { useEffect } from 'react';
import { TokenService } from '@travel-tailor/services';
import { ACCESS_TOKEN, ROUTES } from '@travel-tailor/constants';

export const useProtectedRoute = () => {
	const token = TokenService.getToken(ACCESS_TOKEN);
	const isAuth = token;
    
	useEffect(() => {
		if (!isAuth) {
			window.location.href = ROUTES.SIGNIN;
		}
		return;
	}, []);
};
