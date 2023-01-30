import { FC, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Role } from "@travel-manager/functions";
import { useIsAuthenticated } from "@travel-manager/hooks";

import { TokenService } from "@/setup/services/token.service";
import { AdvertService } from "@/setup/services/advert.service";
import { selectAdverts } from "@/setup/redux/slices/adverts/advert.slice";
import "./style.css";

export const AdvertiserDashboardPage: FC = () => {
  const adverts = useSelector(selectAdverts);
  const tokenService = new TokenService();
  const advertService = new AdvertService();

  const handleUpdate = (id: string, credentials: any) => {
    advertService.delete(id);
  };

  const handleDelete = (id: string) => {
    advertService.delete(id);
  };

  useEffect(() => {
    advertService.findAll();
  }, []);

  useIsAuthenticated(tokenService.find(), "/signin", Role.Advertiser);
  return (
    <div>
      <h1>Advertiser dashboard</h1>
      <Link to={"/advertiser/create-advert"}>Create advert</Link>
      <table className="tg">
        <thead>
          <tr>
            <th className="tg-0pky">id</th>
            <th className="tg-0pky">name</th>
            <th className="tg-0pky">update</th>
            <th className="tg-0pky">delete</th>
          </tr>
        </thead>
        <tbody>
          {adverts.advert.map((advert, index) => (
            <tr key={index}>
              <td className="tg-0pky">{index}</td>
              <td className="tg-0pky">{advert.name}</td>
              <td className="tg-0pky"><button onClick={() => handleUpdate(advert.id, {})}>Update</button></td>
              <td className="tg-0pky"><button onClick={() => handleDelete(advert.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
