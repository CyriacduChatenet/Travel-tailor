import { HelloService } from '@travel-tailor/services';
import { NextPage } from 'next';

import { Layout } from '@/layout';

const Home: NextPage = ({ message }: any) => (
  <Layout>
    <>
      <p>{message}</p>
    </>
  </Layout>
);

export default Home;

export const getServerSideProps = async () => {
  const response = await HelloService.getHello(
    `${process.env.NEXT_PUBLIC_API_URL}`,
  );
  return {
    props: {
      message: response.message,
    },
  };
};
