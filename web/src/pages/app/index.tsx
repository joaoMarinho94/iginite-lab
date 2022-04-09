import { withPageAuthRequired } from '@auth0/nextjs-auth0';

export default function Home(): JSX.Element {
  return (
    <div>
      <h1>Hello word</h1>
    </div>
  );
}

export const getServerSideProps = withPageAuthRequired();
