import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { HomePage } from "@/app/pages/home";
import { SigninPage } from "@/app/pages/auth/signin";
import { SignupPage } from "@/app/pages/auth/signup";

import { AdminRouter } from "@/app/router/admin";
import { AdvertiserRouter } from "@/app/router/advertiser";
import { TravelerRouter } from "@/app/router/traveler";

export const Router: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/signin"} element={<SigninPage />} />
        <Route path={"/signup"} element={<SignupPage />} />
      </Routes>
      <AdminRouter />
      <AdvertiserRouter />
      <TravelerRouter />
    </BrowserRouter>
  );
};
