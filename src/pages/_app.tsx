import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import { ApolloProvider } from '@apollo/client';
import { ChakraProvider } from '@chakra-ui/react';
import { CacheProvider } from '@emotion/react';
import { DefaultSeo } from 'next-seo';

import { useApollo } from '@/lib/apolloClient';
import emotionCache from '@/lib/emotion';

import theme from '@/theme';

import DEFAULT_SEO from '../../next-seo.config.js';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const apolloClient = useApollo(pageProps);

  return (
    <CacheProvider value={emotionCache}>
      <ChakraProvider theme={theme}>
        <DefaultSeo
          {...DEFAULT_SEO}
          canonical={`https://learn-next-graphql.vercel.app${router.asPath}`}
          openGraph={{
            url: `https://learn-next-graphql.vercel.app${router.asPath}`,
          }}
        />
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
      </ChakraProvider>
    </CacheProvider>
  );
}

export default MyApp;
