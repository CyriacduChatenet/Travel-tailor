import { User } from "../user";

export type Traveler = {
    id: string;
    user: User;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
};

export type CreateTraveler = {
    user: string[];
};

export type UpdateTraveler = {
    user: string[];
};