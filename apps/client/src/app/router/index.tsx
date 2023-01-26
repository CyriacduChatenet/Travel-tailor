import { FC } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from "../pages/home";

export const Router: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<HomePage/>} />
            </Routes>
        </BrowserRouter>
    );
};