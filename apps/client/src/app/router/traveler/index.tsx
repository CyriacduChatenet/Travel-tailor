import { FC } from "react";
import { Routes, Route } from "react-router-dom";

import { TravelerDashboardPage } from "@/app/pages/traveler/dashboard";

export const TravelerRouter: FC = () => {
  return (
    <Routes>
      <Route path={"/dashboard"} element={<TravelerDashboardPage />} />
    </Routes>
  );
};
