import { useState, useContext, useEffect } from 'react'

import { useRouter } from 'next/router'
import { Box, Button, Container, Heading, HStack } from "@chakra-ui/react";

import Question from '@/components/Quesiton'
import { AnimatePresence } from 'framer-motion';
import Cookies from 'js-cookie';

function Quiz({ data, deathInfo })
{
  const router = useRouter()

  const [questions, setQuestions] = useState([])
  const [questionIndex, setQuestionIndex] = useState(0)
  // const [currentDeathInfo, setCurrentDeathInfo] = useState({})

  // let questions = []
  // let questions = data
  //Filter out questions already answered


  useEffect(() =>
  {
    if (typeof window !== 'undefined')
    {
      const userAnswers = Cookies.getJSON('answers')
      if (!userAnswers)
      {
        Cookies.set('answers', '[]')
      } else
      {
        const userQuestions = data.filter(x => !userAnswers.some(y => y.id === x.char_id))
        setQuestions(userQuestions)
        if (userQuestions.length === 0)
        {
          router.push('/results?completed=true')
        }
      }
    }
  }, [])

  const handleNextQuestion = () =>
  {
    if (questionIndex + 1 === questions.length)
    {
      router.push('/results?completed=true')
    }
    setQuestionIndex(questionIndex + 1)
  }

  // useEffect(() =>
  // {
  //   const charDeathInfo = deathInfo.find(x => x.death === questions[questionIndex].name)
  //   console.log(charDeathInfo)
  //   if (!!charDeathInfo)
  //   {
  //     setCurrentDeathInfo(charDeathInfo[0])
  //   } else
  //   {
  //     setCurrentDeathInfo({})
  //   }
  // }, [questionIndex])

  return (
    <Container centerContent p={4}>
      <AnimatePresence exitBeforeEnter >
        {questions.length > 0 &&
          <>
            <Question
              key={questionIndex}
              question={questions[questionIndex]}
              handleNextQuestion={handleNextQuestion}
              allDeathInfo={deathInfo}
            />
            <link rel="preload" href={questions[questionIndex + 1].img} as="image" />
          </>
        }
      </AnimatePresence>

    </Container>
  );
}

export default Quiz;

export async function getStaticProps()
{
  const res = await fetch(`https://www.breakingbadapi.com/api/characters/`)
  const data = await res.json()

  const deathres = await fetch('https://www.breakingbadapi.com/api/deaths')
  const deathInfo = await deathres.json()

  return {
    props: { data, deathInfo }
  }
}