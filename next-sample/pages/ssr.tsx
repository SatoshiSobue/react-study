import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';

type SSRProps = {
  message: string;
};

const SSR: NextPage<SSRProps> = (props) => {
  const { message } = props;

  return (
    <div>
      <Head>
        <title>
          Static Site Generation
          <link rel="icon" href="/favicon.ico" />
        </title>
      </Head>
      <main>
        <p>
          このページはサーバーサイドレンリングによってアクセス時に生成されたページです
        </p>
      </main>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<SSRProps> = async (
  context
) => {
  const timestamp = new Date().toLocaleDateString();
  const message = `${timestamp} にgetStaticPropsが実行されました`;
  console.log(message);

  return {
    props: {
      message,
    },
  };
};

export default SSR;
