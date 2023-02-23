import jwt_decode from 'jwt-decode';

export { createSlice, configureStore } from "@reduxjs/toolkit";
export type { Action, ThunkAction } from "@reduxjs/toolkit";
export { Provider as ReduxProvider } from "react-redux";
export { BrowserRouter, Route, Routes, Navigate, Outlet } from "react-router-dom";

export const jwtDecode = jwt_decode;
  
export enum Role {
    Traveler = 'traveler',
    Advertiser = 'advertiser',
    Admin = 'admin',
  }
  