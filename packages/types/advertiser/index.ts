import { Advert } from "../advert";
import { User } from "../user";

export type Advertiser = {
    id: string;
    name: string;
    location: string;
    user: User;
    adverts: Advert[];
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
};

export type CreateAdvertiser = {
    name: string;
    location: string;
    user: string[];
    adverts: string[];
}

export type UpdateAdvertiser = {
    name: string;
    location: string;
    user: string[];
    adverts: string[];
}