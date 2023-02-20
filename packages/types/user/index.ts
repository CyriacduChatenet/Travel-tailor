import { Advertiser } from "../advertiser";
import { ResetPasswordToken } from "../reset-password-token";
import { Traveler } from "../traveler";

export type User = {
    id: string;
    username: string;
    email: string;
    password: string;
    roles: string[];
    advertiser?: Advertiser;
    traveler?: Traveler;
    resetPasswordToken: ResetPasswordToken;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
};

export type CreateUser = {
    username: string;
    email: string;
    password: string;
    roles: string[];
    advertiser?: string;
    traveler?: string;
    resetPasswordToken: string;
};

export type UpdateUser = {
    username: string;
    email: string;
    password: string;
    roles: string[];
    advertiser?: string;
    traveler?: string;
    resetPasswordToken: string;
};