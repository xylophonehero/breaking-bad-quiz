import { Button, Container, VStack, Heading, Text } from "@chakra-ui/react";
import { useRouter } from 'next/router'
import { useEffect, useState } from "react";
import Cookies from 'js-cookie'

import CharacterCard from "@/components/CharacterCard";
import Link from "next/link";

function Results({ data })
{
  const router = useRouter()

  const [results, setResults] = useState([])
  const [myResults, setMyResults] = useState([])

  useEffect(() =>
  {
    const getResults = async () =>
    {
      const res = await fetch(`/api/get-results`)
      const results = await res.json()
      setResults(results)
    }
    getResults()

    if (typeof window !== 'undefined')
    {
      const answered = Cookies.getJSON('answers')
      setMyResults(answered)
    }

  }, [])

  const handleReset = () =>
  {
    Cookies.remove('answers')
    router.push('/')
  }


  return (
    <Container py={4}>

      <VStack spacing={4}>
        <Heading textAlign="center">Results</Heading>
        {router.query.completed &&
          <>
            <Text>You answered all the questions. Reset the data to do the quiz again.</Text>
            <Button onClick={handleReset}>Reset Data</Button>
          </>
        }
        {myResults.length === 0 &&
          <>
            <Text>Try answering some questions first!</Text>
            <Link href="/quiz"><Button>Start Quiz</Button></Link>
          </>
        }

        {data.map(character =>
        {
          const result = results.find(x => x.data.char_id === character.char_id)
          const myResult = myResults.find(x => x.id === character.char_id)
          if (!myResult || !result)
          {
            return
          }
          return (
            <CharacterCard
              key={character.char_id}
              character={character}
              result={result.data}
              correct={myResult.correct}
            />
          )
        })}
      </VStack>
    </Container>
  );
}

export default Results;

export async function getStaticProps()
{
  const res = await fetch(`https://www.breakingbadapi.com/api/characters/`)
  const data = await res.json()

  return {
    props: { data }
  }
}

// export async function getServerSideProps()
// {
//   const res = await fetch(`/api/get-results`)
//   const results = res.json()

//   return {
//     props: { results }
//   }
// }