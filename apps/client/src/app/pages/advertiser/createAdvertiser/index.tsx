import { FC } from "react";
import {  useIsAuthenticated } from '@travel-manager/hooks';
import { Role } from '@travel-manager/functions';

import { TokenService } from "@/setup/services/token.service";
import { CreateAdvertiserForm } from "@/app/components/advertiser/createAdvertiserForm";
import { ROUTES } from "@/setup/constants";

export const CreateAdvertiserPage: FC = () => {
    const tokenService = new TokenService();
    
    useIsAuthenticated(tokenService.find(), ROUTES.AUTH.SIGNIN, Role.Advertiser);
  return <div>
    <h1>Create advertiser</h1>
    <CreateAdvertiserForm/>
  </div>;
};
