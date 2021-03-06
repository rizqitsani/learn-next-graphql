import * as React from 'react';

import {
  Heading,
  Spinner,
  useColorModeValue as mode,
  VStack,
} from '@chakra-ui/react';

import Container from '@/components/Container';
import Layout from '@/components/layout';

import { useHelloQuery } from '@/graphql/generated';

const HomePage = () => {
  const { data, loading } = useHelloQuery();

  return (
    <Layout>
      <Container as='main'>
        <VStack
          as='section'
          justify='center'
          minHeight={{ base: 'calc(100vh - 7.5rem)', md: 'calc(100vh - 8rem)' }}
          spacing={6}
        >
          {loading ? (
            <Spinner
              thickness='4px'
              color={mode('orange.600', 'orange.300')}
              size='xl'
            />
          ) : (
            <Heading as='h1' color={mode('gray.900', 'orange.300')}>
              {data?.hello}
            </Heading>
          )}
        </VStack>
      </Container>
    </Layout>
  );
};

export default HomePage;
