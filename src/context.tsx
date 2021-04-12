import React, { useState } from 'react'
import { Question } from './API'
import QuestionCard from './components/QuestionCard/QuestionCard'
import { Link } from 'react-router-dom'
import { FiLogOut } from 'react-icons/fi'
const TOTAL_QUESTIONS = 10


export const QuizContext: any = React.createContext({});

export type AnswerObject = {
    question: string,
    answer: string,
    correct: boolean,
    correctAnswer: string

}
export const QuizProvider: React.FC<{}> = ({ children }) => {
    const [loading, setLoading] = useState(false)
    const [questions, setQuestions] = useState<Question[]>([])
    const [number, setNumber] = useState(0)
    const [userAnswer, setUserAnswer] = useState<AnswerObject[]>([])
    const [score, setScore] = useState(0)
    const [gameOver, setGameOver] = useState(true)

    const nextQuery = () => {
        let next = number + 1
        if (next === TOTAL_QUESTIONS) setGameOver(true);
        else { setNumber(next) }
    }

    const checkAnswer = (e: any) => {
        if (!gameOver) {
            const answer = e.currentTarget.value
            const correct = questions[number].correct_answer === answer
            if (correct) setScore((prev: number) => prev + 1)

            const answerObject = {
                question: questions[number].question,
                answer,
                correct,
                correctAnswer: questions[number].correct_answer
            }
            setUserAnswer(prev => [...prev, answerObject])

        }
    }


    return (
        <QuizContext.Provider value={{ questions, setQuestions, loading, setLoading, number, setNumber, userAnswer, setUserAnswer, score, setScore, gameOver, setGameOver, nextQuery, checkAnswer }}>
            {children}
            {!gameOver ? (<p className='score'>Score : {score}</p>) : null}
            {loading ? <p>Loading Queries...</p> : null}
            {!loading && !gameOver && (<QuestionCard
                questionNr={number + 1}
                totalQuestions={TOTAL_QUESTIONS}
                question={questions[number].question}
                answers={questions[number].answers}
                userAnswer={userAnswer ? userAnswer[number] : undefined}
                callback={checkAnswer}
            />)}
            {!gameOver && number !== TOTAL_QUESTIONS - 1 && userAnswer[number] && (<button className='next' onClick={nextQuery}>Next Question</button>)}
            {!gameOver && number === TOTAL_QUESTIONS - 1 && (<Link className='next log-out' to='/'><FiLogOut />
            </Link>)}
        </QuizContext.Provider>
    )
}
