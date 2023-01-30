import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export interface advertiserSlice {
        id: string;
        name: string;
        location: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
};

const initialState: advertiserSlice[] = [];

export const advertiserSlice = createSlice({
    name: 'advertiser',
    initialState,
    reducers: {
        findAll: (state, actions) => {
            state;
        },

        findOne: (state, actions) => {
            state.filter(advertiser => advertiser.id === actions.payload);
        },

        create: (state, actions) => {
            state.push(actions.payload);
        },

        update: (state, actions) => {
            let advertiser = state.filter(advertiser => advertiser.id === actions.payload.id);
            advertiser = actions.payload.value;
        },

        remove: (state, actions) => {
            state = state.filter(advertiser => advertiser.id !== actions.payload);
        },
    }
})

export const { findAll, findOne, create, update, remove } = advertiserSlice.actions;

export const selectAdvertisers = (state: RootState) => state;

export default advertiserSlice.reducer;