import { NextPage } from 'next';

import { Layout } from '@/layout';
import { WebCreateAdvertiserForm } from '@/organismes/advertiser/create-advertiser-form/react';

const CreateAdvertiser: NextPage = () => {
	return (
		<Layout>
			<h1>Create advertiser</h1>
			<WebCreateAdvertiserForm />
		</Layout>
	);
};

export default CreateAdvertiser;
