import { FC, FormEvent, useState } from "react";
import { useParams } from "react-router-dom";

import { AuthService } from "@/setup/services/auth.service";

export const ResetPasswordForm: FC = () => {
    const [password, setPassword] = useState('');
    const params = useParams();

    const authService = new AuthService();

    const credentials = {password, token: String(params.token)};

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        authService.resetPassword(credentials);
    };

    return (
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="">
                <span>Password</span>
                <input type="password" placeholder="Password" name="password" onChange={(e) => setPassword(e.target.value)} />
            </label>
            <input type="submit" value={'Forgot password'} />
        </form>
    );
};