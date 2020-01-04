import React from 'react';
import Head from 'next/head';
import Navigation from 'src/components/Navigation';
import { Box, Heading, Text, Link } from 'rebass';

const CardTitle = props => <Heading as='h3' variant='card.title' {...props} />;
const CardBody = props => <Text as='p' variant='card.body' {...props} />;

const Home = () => (
  <Box as='main'>
    <Head>
      <title>Home</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <Navigation />

    <Box width='100%'>
      <Heading as='h1' variant='page.title' textAlign='center'>
        Welcome to Next.js!
      </Heading>
      <Text textAlign='center'>
        To get started, edit <code>pages/index.js</code> and save to reload.
      </Text>

      <Box variant='row'>
        <Link href='https://nextjs.org/docs' variant='card'>
          <CardTitle>Documentation &rarr;</CardTitle>
          <CardBody>Learn more about Next.js in the documentation.</CardBody>
        </Link>
        <Link href='https://nextjs.org/learn' variant='card'>
          <CardTitle>Next.js Learn &rarr;</CardTitle>
          <CardBody>
            Learn about Next.js by following an interactive tutorial!
          </CardBody>
        </Link>
        <Link
          href='https://github.com/zeit/next.js/tree/master/examples'
          variant='card'
        >
          <CardTitle>Examples &rarr;</CardTitle>
          <CardBody>
            Find other example boilerplates on the Next.js GitHub.
          </CardBody>
        </Link>
      </Box>
    </Box>
  </Box>
);

export default Home;
