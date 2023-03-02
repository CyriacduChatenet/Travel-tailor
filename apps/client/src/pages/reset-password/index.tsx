import { NextPage } from "next";

import { Layout } from "@/layout";
import { WebSigninForm } from "@travel-tailor/ui";

const ResetPasswordPage: NextPage = () => {
    return (
        <Layout>
            <h1>Reset password</h1>
            <br />
            <WebSigninForm />
        </Layout>
    );
};

export default ResetPasswordPage;