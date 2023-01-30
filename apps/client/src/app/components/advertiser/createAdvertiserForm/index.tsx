import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { changeLocation, changeName, selectLocation, selectName } from "@/setup/redux/slices/advertiser/createAdvertiserRequest.slice";
import { AdvertiserService } from "@/setup/services/advertiser.service";

export const CreateAdvertiserForm: FC = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectName);
  const location = useSelector(selectLocation);
  const navigate = useNavigate();

  const advertiserService = new AdvertiserService();

  const credentials = {name, location};

  const handleSubmit = (e: any) => {
    e.preventDefault();
    advertiserService.create(credentials);
    navigate('/advertiser/dashboard')
  }

  return (
    <form action="" onSubmit={handleSubmit}>
      <label htmlFor="">
        <span>Name</span>
        <input type="text" placeholder="Name" name="name" value={name} onChange={(e) => dispatch(changeName(e.target.value))} />
      </label>
      <label htmlFor="">
        <span>Location</span>
        <input type="text" placeholder="Location" name="location" value={location} onChange={(e) => dispatch(changeLocation(e.target.value))} />
      </label>
      <input type="submit" value="Create advertiser" />
    </form>
  );
};
