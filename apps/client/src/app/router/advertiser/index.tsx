import { FC } from "react";
import { Routes, Route } from "react-router-dom";

import { CreateAdvertiserPage } from "@/app/pages/advertiser/createAdvertiser";
import { AdvertiserDashboardPage } from "@/app/pages/advertiser/advertiserDashboard";
import { CreateAdvertPage } from "@/app/pages/advertiser/advert/createAdvert";
import { EditAdvertPage } from "@/app/pages/advertiser/advert/editAdvert";

export const AdvertiserRouter: FC = () => {
    return (
        <Routes>
            <Route path={"/create-advertiser"} element={<CreateAdvertiserPage />} />
            <Route path={"/advertiser/dashboard"} element={<AdvertiserDashboardPage />} />
            <Route path={"/advertiser/create-advert"} element={<CreateAdvertPage />} />
            <Route path={"/advertiser/edit-advert/:id"} element={<EditAdvertPage />} />
        </Routes>
    );
};