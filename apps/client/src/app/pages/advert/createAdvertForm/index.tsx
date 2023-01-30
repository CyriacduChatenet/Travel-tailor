import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { selectName, changeName } from '@/setup/redux/slices/adverts/createAdvertRequest.slice';

export const CreateAdvertPage: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const name = useSelector(selectName)

  const handleSubmit = (e: any) => {
    e.preventDefault();
    navigate("/advertiser/create-advert");
  };
  return (
    <div>
      <h1>Create Advert</h1>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">
          <span>Name</span>
          <input type="text" placeholder="Name" value={name} onChange={(e) => dispatch(changeName(e.target.value))} />
        </label>
        <input type="submit" value="Create advert" />
      </form>
    </div>
  );
};
