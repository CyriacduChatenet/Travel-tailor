export type AccessToken = {
    id: string;
    username: string;
    roles: string;
    iat: number;
    exp: number;
};

export type AccessTokenPayload = {
    username: string;
    roles: string;
};