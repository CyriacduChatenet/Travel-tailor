import { Traveler } from '../traveler';

export type Taste = {
    id: string;
    name: string
    traveler?: Traveler;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
};

export type CreateTasteDTO = {
    name: string
    traveler?: Traveler;
}

export type UpdateTasteDTO = {
    name: string
    traveler?: Traveler;
}