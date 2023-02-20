import { User } from "../user";

export type ResetPasswordToken = {
    id: string;
    token: string;
    user: User;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
};

export type CreateResetPasswordToken = {
    token: string;
    user: string;
};

export type UpdateResetPasswordToken = {
    token: string;
    user: string;
};