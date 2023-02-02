import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export interface SignupSlice {
    username: string;
    email: string;
    password: string;
    roles: string[];
};

const initialState: SignupSlice = {
    username: "",
    email: "",
    password: "",
    roles: [],
};

export const signupSlice = createSlice({
    name: 'signup',
    initialState,
    reducers: {
        changeUsername : (state, action) => {
            state.username = action.payload;
        },

        changeEmail : (state, action) => {
            state.email = action.payload;
        },

        changePassword : (state, action) => {
            state.password = action.payload;
        },

        changeRoles : (state, action) => {
            state.roles.push(action.payload);
        },
    }
})

export const {changeEmail, changePassword, changeUsername, changeRoles} = signupSlice.actions;

export const selectUsername = (state: RootState) => state.signup.username;
export const selectEmail = (state: RootState) => state.signup.email;
export const selectPassword = (state: RootState) => state.signup.password;
export const selectRoles = (state: RootState) => state.signup.roles;

export default signupSlice.reducer;