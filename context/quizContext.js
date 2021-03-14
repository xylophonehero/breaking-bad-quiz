import { createContext, useState } from 'react'
import { useRouter } from 'next/router'

export const QuizContext = createContext()

function QuizContextProvider({ children })
{
  const router = useRouter()

  const [questionIds, setQuestionIds] = useState([])
  const [questionIndex, setQuestionIndex] = useState(0)

  async function getQuestionIds()
  {
    const res = await fetch('https://www.breakingbadapi.com/api/characters')
    const data = await res.json()
    const ids = data.map(character => (
      character.char_id
    ))
    console.log(ids)

    setQuestionIds(ids)
    router.push(`/questions/${questionIds[questionIndex]}`)
  }

  function nextQuestion()
  {
    setQuestionIndex(questionIndex + 1)
    router.push(`/questions/${questionIds[questionIndex]}`)
  }



  return (
    <QuizContext.Provider value={{ nextQuestion, getQuestionIds }}>
      {children}
    </QuizContext.Provider>
  );
}

export default QuizContextProvider;