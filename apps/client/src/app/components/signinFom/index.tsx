import { FC, useState } from "react";

import { AuthService } from "@/setup/services/auth.service";

export const SigninForm: FC = () => {
    const [credentials, setCredentials] = useState({});
    const [errorResponse, setErrorResponse] = useState({});

    const authService = new AuthService();

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setCredentials({...credentials, [name]: value});
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        authService.signin(credentials, setErrorResponse);
    };

    const handleErrorMessage = () => {
        if(Object.keys(errorResponse).length !== 0) {
            return <p>{errorResponse.message}</p>
        }
    };

    return (
        <form action="" onSubmit={handleSubmit}>
            {handleErrorMessage()}
            <label htmlFor="">
                <span>Email</span>
                <input type="email" placeholder="Email" name="email" onChange={handleChange} />
            </label>
            <label htmlFor="">
                <span>Password</span>
                <input type="password" placeholder="Password" name="password" onChange={handleChange} />
            </label>
            <input type="submit" value={'Signup'} />
        </form>
    );
};