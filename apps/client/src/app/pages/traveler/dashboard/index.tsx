import { Role } from "@travel-manager/functions";
import { useIsAuthenticated } from "@travel-manager/hooks";
import { FC } from "react";

import { TokenService } from "@/setup/services/token.service";

export const TravelerDashboardPage: FC = () => {
  const tokenService = new TokenService();

  useIsAuthenticated(tokenService.find(), "/signin", Role.Traveler);
  return (
    <div>
      <h1>Traveler Dashboard</h1>
    </div>
  );
};
