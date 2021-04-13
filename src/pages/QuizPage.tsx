import React, { useContext } from 'react'
import { QuizContext } from '../context'
import QuestionCard from '../components/QuestionCard/QuestionCard'
import { Link } from 'react-router-dom'
import { FiLogOut } from 'react-icons/fi'
import { GlobalStyle } from './QuizPage.styles'

const TOTAL_QUESTIONS = 10

const QuizPage = () => {
    const { gameOver, loading, score, questions, number, userAnswer, checkAnswer, nextQuery } = useContext(QuizContext)

    return (
        <>
            <GlobalStyle />
            <div>
                {loading ? <p>Loading Queries...</p> : null}
                {!loading && !gameOver && (<QuestionCard
                    questionNr={number + 1}
                    totalQuestions={TOTAL_QUESTIONS}
                    question={questions[number].question}
                    answers={questions[number].answers}
                    userAnswer={userAnswer ? userAnswer[number] : undefined}
                    callback={checkAnswer}
                    score={score}
                    nextQuery={nextQuery}
                />)}
                {!gameOver && number === TOTAL_QUESTIONS - 1 && (<Link className='log-out' to='/'><FiLogOut />
                </Link>)}
            </div>
        </>
    )
}

export default QuizPage
