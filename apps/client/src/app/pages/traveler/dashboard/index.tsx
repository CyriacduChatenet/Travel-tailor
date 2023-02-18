import { FC } from "react";
import { useNavigate } from "react-router-dom";

import { TokenService } from "@/setup/services/token.service";
import { ROUTES } from "@/setup/constants";

export const TravelerDashboardPage: FC = () => {
  const navigate = useNavigate();
  const tokenService = new TokenService();

  const handleLogout = () => {
    tokenService.delete();
    navigate(ROUTES.AUTH.SIGNIN)
  };
  return (
    <div>
      <h1>Traveler Dashboard</h1>
      <br />
      <button onClick={() => handleLogout()}>Logout</button>
    </div>
  );
};
