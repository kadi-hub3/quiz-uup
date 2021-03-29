import React, { useState } from 'react';
import { fetchQuestions, Category, Difficulty, Question } from './API'
import QuestionCard from './components/QuestionCard';
// import QuestionCard from './components/QuestionCard'

const TOTAL_QUESTIONS = 10



function App() {
  const [loading, setLoading] = useState(false)
  const [questions, setQuestions] = useState<Question[]>([])
  const [number, setNumber] = useState(0)
  const [userAnswer, setUserAnswer] = useState([])
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(true)

  const startCSQuiz = async () => {
    setLoading(true)
    setGameOver(false)
    const newQueries = await fetchQuestions(TOTAL_QUESTIONS, Category.Computers, Difficulty.MEDIUM)
    setQuestions(newQueries)
    console.log(newQueries);
    setNumber(0)
    setScore(0)
    setUserAnswer([])
    setLoading(false)

  }
  const startGeneralQuiz = async () => {
    setLoading(true)
    setGameOver(false)
    const newQueries = await fetchQuestions(TOTAL_QUESTIONS, Category.General, Difficulty.MEDIUM)
    setQuestions(newQueries)
    console.log(newQueries);
    setNumber(0)
    setScore(0)
    setUserAnswer([])
    setLoading(false)

  }
  const startPoliticsQuiz = async () => {
    setLoading(true)
    setGameOver(false)
    const newQueries = await fetchQuestions(TOTAL_QUESTIONS, Category.Politics, Difficulty.MEDIUM)
    setQuestions(newQueries)
    console.log(newQueries);
    setNumber(0)
    setScore(0)
    setUserAnswer([])
    setLoading(false)

  }

  const checkAnswer = (e: any) => {
    if (!gameOver) {
      const answer = e.currentTarget.value
      const correct = questions[number].correct_answer === answer
      if (correct) setScore((prev) => prev + 1)
    }

  }

  const nextQuery = () => {
    let next = number + 1
    if (next === TOTAL_QUESTIONS) setGameOver(true);
    else { setNumber(next) }
  }

  return (
    <div>
      <h3>Quiz UUP</h3>
      {gameOver ?
        (<button className='start' onClick={startCSQuiz}>CS Quiz</button>
        ) : null
      }
      {gameOver ?
        (<button className='start' onClick={startGeneralQuiz}>General Quiz</button>
        ) : null
      }
      {gameOver ?
        (<button className='start' onClick={startPoliticsQuiz}>Politics Quiz</button>
        ) : null
      }
      {!gameOver ? (<p>Score : {score}</p>) : null}
      {loading ? <p>Loading Queries...</p> : null}
      {!loading && !gameOver && (<QuestionCard
        questionNr={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswer ? true : false}
        callback={checkAnswer}
      />)}
      {!gameOver && !loading && (<button className='next' onClick={nextQuery}>Next Question</button>)}
    </div>
  );
}

export default App;
