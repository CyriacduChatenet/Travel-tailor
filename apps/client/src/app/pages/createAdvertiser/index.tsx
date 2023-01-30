import { FC } from "react";
import {  useIsAuthenticated } from '@travel-manager/hooks';
import { Role } from '@travel-manager/functions';

import { TokenService } from "@/setup/services/token.service";

export const CreateAdvertiserPage: FC = () => {
    const tokenService = new TokenService();
    
    useIsAuthenticated(tokenService.find(), '/signin', Role.Advertiser);
  return <div>Create advertiser</div>;
};
