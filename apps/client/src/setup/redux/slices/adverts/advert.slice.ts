import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export interface advertSlice {
    id: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
};

const initialState: advertSlice[] = [];

export const advertSlice = createSlice({
    name: 'advert',
    initialState,
    reducers: {
        findAll: (state, actions) => {
            state;
        },

        findOne: (state, actions) => {
            state.filter(advert => advert.id === actions.payload);
        },

        create: (state, actions) => {
            state.push(actions.payload);
        },

        update: (state, actions) => {
            let advert = state.filter(advert => advert.id === actions.payload.id);
            advert = actions.payload.value;
        },

        remove: (state, actions) => {
            state = state.filter(advert => advert.id !== actions.payload);
        },
    },
});

export const { findAll, findOne, create, update, remove } = advertSlice.actions;

export const selectAdverts = (state: RootState) => state;

export default advertSlice.reducer;