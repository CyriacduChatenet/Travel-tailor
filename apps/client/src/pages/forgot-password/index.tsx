import { NextPage } from "next";

import { Layout } from "@/layout";
import { WebSigninForm } from "@travel-tailor/ui";

const ForgotPasswordPage: NextPage = () => {
    return (
        <Layout>
            <h1>Forgot password</h1>
            <br />
            <WebSigninForm />
        </Layout>
    );
};

export default ForgotPasswordPage;