import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useIsAuthenticated } from "@travel-manager/hooks";
import { Role } from "@travel-manager/functions";

import { selectLocation, selectName, changeName, changeLocation } from "@/setup/redux/slices/advertiser/createAdvertiserRequest.slice";
import { TokenService } from "@/setup/services/token.service";
import { AdvertiserService } from "@/setup/services/advertiser.service";

export const CreateAdvertiserForm: FC = () => {
    const dispatch = useDispatch();
    const name = useSelector(selectName);
    const location = useSelector(selectLocation);
    const navigate = useNavigate();
    const tokenService = new TokenService();
    const advertiserService = new AdvertiserService();

    const credentials = {name, location}

    const handleSubmit = () => {
        advertiserService.create(credentials);
        // navigate('/advertiser/dashboard');
    };

    useIsAuthenticated(tokenService.find(), "/signin", Role.Advertiser);
  return (
    <form action="" onSubmit={(e) => {
        e.preventDefault();
        handleSubmit()
        }}>
      <label htmlFor="">
        <span>Name</span>
        <input type="text" placeholder="Name" value={name} name="name" onChange={(e) => dispatch(changeName(e.target.value))} />
      </label>
      <label htmlFor="">
        <span>Location</span>
        <input type="text" placeholder="Location" value={location} name="location" onChange={(e) => dispatch(changeLocation(e.target.value))} />
      </label>
      <input type="submit" value="Create advertiser" />
    </form>
  );
};