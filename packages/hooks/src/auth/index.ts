import {  reactRouter, jwtDecode } from '@travel-manager/functions';
import { useEffect } from 'react';

import { Token } from '../types/token.type';

export const useIsAuthenticatedHook = (token: string | undefined | null, redirectUrl: string) => {
    const navigate = reactRouter.useNavigate();

    const handleCheckIfTokenIsValid = () => {
        if(token == 'undefined' || token === null) {
            console.error('You must provide valid token');
            return navigate(redirectUrl);
        }
    
        const decodedToken = jwtDecode(String(token)) satisfies Token;
        const date = new Date;
        
        if(decodedToken.exp < date.getTime()) {
            console.error('You must provide valid token');
            return navigate(redirectUrl);
        }
    }

    useEffect(() => {
        handleCheckIfTokenIsValid();
    }, [])
};