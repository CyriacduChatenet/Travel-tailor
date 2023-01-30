import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export interface CreateAdvertiserResponseSlice {
    response : {
        id: string;
        name: string;
        location: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    }
};

const initialState: CreateAdvertiserResponseSlice = {
    response: {
        id: "",
        name: "",
        location: "",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
    }
};

export const createAdvertiserResponseSlice = createSlice({
    name: 'createAdvertiser',
    initialState,
    reducers: {
        changeResponse : (state, action) => {
            state.response = action.payload;
        },
    }
})

export const {changeResponse} = createAdvertiserResponseSlice.actions;

export const selectResponse = (state: RootState) => state.createAdvertiserResponse.response;
export const selectId = (state: RootState) => state.createAdvertiserResponse.response.id;
export const selectName = (state: RootState) => state.createAdvertiserResponse.response.name;
export const selectLocation = (state: RootState) => state.createAdvertiserResponse.response.location;

export default createAdvertiserResponseSlice.reducer;