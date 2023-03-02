import { NextPage } from "next";

import { Layout } from "@/layout";
import { WebForgotPasswordForm } from "@travel-tailor/ui";

const ForgotPasswordPage: NextPage = () => {
    return (
        <Layout>
            <h1>Forgot password</h1>
            <br />
            <WebForgotPasswordForm />
        </Layout>
    );
};

export default ForgotPasswordPage;