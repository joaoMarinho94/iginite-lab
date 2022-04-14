import { getAccessToken, withPageAuthRequired } from '@auth0/nextjs-auth0';

export default function Home(): JSX.Element {
  return (
    <div>
      <h1>Hello word</h1>
    </div>
  );
}

export const getServerSideProps = withPageAuthRequired({
  getServerSideProps: async ({ req, res }) => {
    console.log(getAccessToken(req, res));

    return {
      props: {},
    };
  },
});
