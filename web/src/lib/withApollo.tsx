import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  from,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';
import { GetServerSidePropsContext, NextPage } from 'next';

export type ApolloClientContext = GetServerSidePropsContext;

export function getApolloClient(
  ctx?: ApolloClientContext,
  ssrCache?: NormalizedCacheObject
): ApolloClient<NormalizedCacheObject> {
  const httpLink = createHttpLink({
    uri: 'http://localhost:3000/api',
    fetch,
  });

  const cache = new InMemoryCache().restore(ssrCache ?? {});

  return new ApolloClient({
    link: from([httpLink]),
    cache,
  });
}

export const withApollo = (Component: NextPage) => {
  return function Provider({ apolloState, ...rest }: any): JSX.Element {
    return (
      <ApolloProvider client={getApolloClient(undefined, apolloState)}>
        <Component {...rest} />
      </ApolloProvider>
    );
  };
};
