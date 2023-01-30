import { Dispatch, SetStateAction } from "react";
import { useDispatch, useSelector } from "react-redux";

import { CreateAdvertiserCredentials } from "@/setup/types/advertiser.type";
import { changeResponse, selectResponse } from "@/setup/redux/slices/advertiser/createAdvertiserResponse.slice";

export class AdvertiserService {
    dispatch = useDispatch();
    response = useSelector(selectResponse)

    public async findAll() {
        try {
            const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/advertiser`)
            const responseJSON = await response.json();
            console.log(responseJSON);
        } catch (err) {
            console.error(err);
        }
    }
    
    public async findOne(id: string) {
        try {
            const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/advertiser/${id}`)
            const responseJSON = await response.json();
            console.log(responseJSON);
        } catch (err) {
            console.error(err);
        }
    }

    public async create(credentials: CreateAdvertiserCredentials) {
        try {
            const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/advertiser`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                body: JSON.stringify(credentials)
            });
            const responseJSON = await response.json();
            this.dispatch(changeResponse(responseJSON));
            console.log(responseJSON);
        } catch (err) {
            console.error(err);
        }
    };

    public async update(id: string) {}

    public async delete(id: string) {}
}