import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";

import signupSlice from "@/setup/redux/slices/auth/signup.slice";
import signinSlice from "@/setup/redux/slices/auth/signin.slice";
import createAdvertiserRequestSlice from "@/setup/redux/slices/advertiser/createAdvertiserRequest.slice";
import createAdvertiserResponseSlice from "@/setup/redux/slices/advertiser/createAdvertiserResponse.slice";

export const store = configureStore({
    reducer: {
      signup: signupSlice,
      signin: signinSlice,
      createAdvertiserRequest: createAdvertiserRequestSlice,
      createAdvertiserResponse: createAdvertiserResponseSlice,
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;