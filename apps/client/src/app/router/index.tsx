import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { HomePage } from "@/app/pages/home";
import { SigninPage } from "@/app/pages/signin";
import { SignupPage } from "@/app/pages/signup";
import { CreateAdvertiserPage } from "@/app/pages/createAdvertiser";

export const Router: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"signin"} element={<SigninPage />} />
        <Route path={"signup"} element={<SignupPage />} />
        <Route path={"create-advertiser"} element={<CreateAdvertiserPage />} />
      </Routes>
    </BrowserRouter>
  );
};
