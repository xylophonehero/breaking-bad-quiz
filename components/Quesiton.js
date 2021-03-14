import { useEffect, useState } from 'react';
import Image from 'next/image'
import Cookies from 'js-cookie'

import
{
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  Text,
  VStack
} from "@chakra-ui/react";
import { motion } from 'framer-motion'

import { getRandomFeedback } from '@/utils/feedback.js'
import PercentageBar from './PercentageBar';

function Quesiton({ question, handleNextQuestion, allDeathInfo })
{
  const [showAnswer, setShowAnswer] = useState(0)
  const [results, setResults] = useState({ correct: 0, incorrect: 0 })
  const [feedback, setFeedback] = useState("")
  // const [deathInfo, setDeathInfo] = useState({ cause: "", killer: "" })

  const handleAnswer = async (answer) =>
  {
    //TODO post whether user is right or wrong
    const answered = Cookies.getJSON('answers')
    answered.push({ id: question.char_id, correct: answer })
    Cookies.set('answers', JSON.stringify(answered))

    setFeedback(getRandomFeedback(answer))

    setShowAnswer(answer ? 1 : -1)

    const res = await fetch('/api/post-result', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: question.char_id, answer })
    })
    const data = await res.json()
  }

  //TODO Add function which retrieves percentage of users that got the question right
  useEffect(() =>
  {
    async function getResults()
    {
      const res = await fetch(`/api/get-results/${question.char_id}`)
      const data = await res.json()
      if (res.status === 200)
      {
        setResults({ correct: data.correct, incorrect: data.incorrect })
      }
    }

    //TODO fetch death info here
    // async function getDeathInfo()
    // {
    //   const res = await fetch('')
    // }
    getResults()
  }, [])

  const deathInfo = allDeathInfo.find(x => x.death === question.name)

  const appearVariants = {
    hidden: { opacity: 0, y: "-100px" },
    visible: {
      opacity: 1, y: "0px", transition: {
        delay: 1, duration: 1
      }
    }
  }

  return (
    <Box
      as={motion.div}
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: 1, opacity: 1, transition: {
          duration: 1
        }
      }}
      exit={{
        x: "-100vw", opacity: 0, transition: {
          duration: 0.5
        }
      }}
    >
      <VStack spacing={4}>
        <Box
          pos="relative"
          w={["250px", "400px"]}
          h={["250px", "400px"]}
          overflow="hidden"
          border={2}
          borderColor="brand.800"
          fill="rgba(0,0,0,0.7)"
          zIndex={1}
        >

          <Image
            src={question.img}
            alt={question.name}
            layout="fill"
            objectFit="cover"
            objectPosition="top"
          />
          {showAnswer !== 0 &&
            <Box
              as={motion.div}
              initial={{ backgroundColor: "rgba(0,0,0,0)" }}
              animate={{ backgroundColor: `rgba(${question.status === "Alive" ? 0 : 96},${question.status === "Alive" ? 32 : 0},0,0.5)` }}
              pos="relative"
              zIndex={2}
              w="full"
              h="full"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              p={8}
              textAlign="center"

            >
              <Heading
                as={motion.p}
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.5, 1] }}
                textAlign="center"
                size="4xl">
                {question.status === "Alive" ? "😊" : "☠️"}
              </Heading>
              {question.status !== "Alive" && !!deathInfo &&
                <>
                  <Text color="white" fontSize="xl" mt={2}>
                    Killed by {deathInfo.responsible}
                  </Text>
                  <Text color="white" fontSize="xl" mt={2}>
                    Cause of death: {deathInfo.cause}
                  </Text>
                </>
              }
            </Box>
          }

        </Box>

        <VStack
          as={motion.div}
          variants={appearVariants}
          initial="hidden"
          animate="visible"
          spacing={4}
        >
          <Heading>{question.name}</Heading>
          <Text>({question.nickname})</Text>
          {showAnswer === 0 &&
            <HStack>
              <Button onClick={() => handleAnswer(question.status === "Alive" ? true : false)}>😊 Alive</Button>
              <Button onClick={() => handleAnswer(question.status === "Alive" ? false : true)}>☠️ Dead</Button>
            </HStack>
          }
        </VStack>

        {showAnswer !== 0
          &&
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1 } }}
          >
            <VStack spacing={4}>
              <HStack maxW="500px">
                <Heading fontSize="2xl">
                  {showAnswer === 1 ? "✔️" : "❌"}
                </Heading>
                <Text as="cite">{feedback}</Text>
              </HStack>

              <Button onClick={() => handleNextQuestion()}>Next Question</Button>
              <PercentageBar width={300} left={results.correct + (showAnswer === 1 ? 1 : 0)} right={results.incorrect + (showAnswer === -1 ? 1 : 0)} />
              {/* <Text>Users correct: {Math.floor(100 / (results.correct + results.incorrect + 2) * (results.correct + 1))}%</Text> */}
              {/* <Flex
                w="300px"
                h="50px"
                bgColor="brand.600"
              >
                <Box
                  as={motion.div}
                  initial={{ width: 0 }}
                  animate={{
                    width: `${300 / (results.correct + results.incorrect + 2) * (results.correct + 1)}px`,
                    transition: { duration: 1 }
                  }}
                  h="50px"
                  bgColor="brand.800"
                />
              </Flex> */}
            </VStack>


          </motion.div>

        }
      </VStack>
    </Box>
  );
}

export default Quesiton;