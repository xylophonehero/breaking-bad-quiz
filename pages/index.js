import { useContext } from 'react'

import { Button, Container, Heading, Text, VStack, Link, HStack } from '@chakra-ui/react'
import Head from 'next/head'




export default function Home()
{

  return (
    <Container p={8}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <VStack spacing={8}>
        <Heading>Welcome</Heading>
        <Text>Do you know if each character is alive or dead?</Text>
        <HStack spacing={8}>
          <Link href="/quiz">
            <Button>Start Quiz</Button>
          </Link>
          <Link href="/results">
            <Button>See Results</Button>
          </Link>
        </HStack>

      </VStack>
    </Container>
  )
}
