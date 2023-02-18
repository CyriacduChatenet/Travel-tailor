import { FC } from 'react';
import { Outlet, Navigate } from 'react-router-dom';

import { TokenService } from '@/setup/services/token.service';
import { jwtDecode } from '@travel-manager/functions';

interface IProps {
    role: string;
}

export const PrivateRoutes:FC<IProps> = ({ role }) => {
    const tokenService = new TokenService();
    const userToken = tokenService.find();
    const userDecodedToken = jwtDecode(userToken!) satisfies any;
    const userRole = userDecodedToken.roles;

    let auth = {'token': userToken};
    return(
        auth.token && userRole === role ? <Outlet/> : <Navigate to="/signin"/>
    )
}