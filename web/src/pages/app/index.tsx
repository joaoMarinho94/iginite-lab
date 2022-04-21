import { getAccessToken, withPageAuthRequired } from '@auth0/nextjs-auth0';
import {
  useGetProductsQuery,
  useMeQuery,
} from '../../graphql/generated/graphql';
import {
  getServerPageGetProducts,
  ssrGetProducts,
} from '../../graphql/generated/page';
import { withApollo } from '../../lib/withApollo';

function Home(): JSX.Element {
  // const { data, loading, error } = useGetProductsQuery();
  // console.log('data: ', data);
  const { data: me } = useMeQuery();
  console.log('me: ', me);

  return (
    <div>
      <h1 className="text-3xl font-bold italic">Hello word</h1>
    </div>
  );
}

export const getServerSideProps = withPageAuthRequired({
  getServerSideProps: async ctx => {
    return {
      props: {},
    };
  },
});

export default withApollo(ssrGetProducts.withPage()(Home));
