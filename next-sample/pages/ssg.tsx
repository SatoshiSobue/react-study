import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';

type SSGProps = {
  message: string;
};

const SSG: NextPage<SSGProps> = (props) => {
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
        <p>このページは静的サイトによってビルド時に生成されたページです</p>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps<SSGProps> = async (context) => {
  const timestamp = new Date().toLocaleDateString();
  const message = `${timestamp} にgetStaticPropsが実行されました`;
  console.log(message);

  return {
    props: {
      message,
    },
  };
};

export default SSG;
