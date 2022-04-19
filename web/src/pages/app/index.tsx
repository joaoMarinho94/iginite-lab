import { getAccessToken, withPageAuthRequired } from '@auth0/nextjs-auth0';
import { useGetProductsQuery } from '../../graphql/generated/graphql';
import {
  getServerPageGetProducts,
  ssrGetProducts,
} from '../../graphql/generated/page';
import { withApollo } from '../../lib/withApollo';

function Home({ data }): JSX.Element {
  console.log('products: ', data.products);

  // const { data, loading, error } = useGetProductsQuery();
  // console.log('data: ', data);

  return (
    <div>
      <h1>Hello word</h1>
    </div>
  );
}

export const getServerSideProps = withPageAuthRequired({
  getServerSideProps: async ctx => {
    console.log(getAccessToken(ctx.req, ctx.res));

    return getServerPageGetProducts({}, ctx);
  },
});

export default withApollo(ssrGetProducts.withPage()(Home));
