import { FC, useEffect } from "react";
import { Role } from "@travel-manager/functions";
import { useIsAuthenticated } from "@travel-manager/hooks";

import { TokenService } from "@/setup/services/token.service";
import { AdvertService } from "@/setup/services/advert.service";
import './style.css';
import { Link } from "react-router-dom";

export const AdvertiserDashboardPage: FC = () => {
  const tokenService = new TokenService();
  const advertService = new AdvertService();

  useEffect(() => {
    advertService.findAll();
  }, [])

  useIsAuthenticated(tokenService.find(), "/signin", Role.Advertiser);
  return (
    <div>
      <h1>Advertiser dashboard</h1>
      <Link to={'/advertiser/create-advert'}>Create advert</Link>
      <table className="tg">
        <thead>
          <tr>
            <th className="tg-0pky">id</th>
            <th className="tg-0pky">name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="tg-0pky"></td>
            <td className="tg-0pky"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
