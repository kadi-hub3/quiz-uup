import React, { useState } from 'react'
import { fetchQuestions, Category, Difficulty, Question } from '../API'
import QuestionCard from '../components/QuestionCard';
import GeneralImg from '../images/general-img.jpg'
import { Link } from 'react-router-dom'
import { Container } from './GeneralPage.styles'
const TOTAL_QUESTIONS = 10



const GeneralPage = () => {
    const [loading, setLoading] = useState(false)
    const [questions, setQuestions] = useState<Question[]>([])
    const [number, setNumber] = useState(0)
    const [userAnswer, setUserAnswer] = useState([])
    const [score, setScore] = useState(0)
    const [gameOver, setGameOver] = useState(true)

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

    const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
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
            {!gameOver ? (<p>Score : {score}</p>) : null}
            {loading ? <p>Loading Queries...</p> : null}
            {/* {!loading && !gameOver && (<QuestionCard
                questionNr={number + 1}
                totalQuestions={TOTAL_QUESTIONS}
                question={questions[number].question}
                answers={questions[number].answers}
                userAnswer={userAnswer ? true : false}
                callback={checkAnswer}
            />)} */}
            {!gameOver && !loading && (<button className='next' onClick={nextQuery}>Next Question</button>)}
        </div>
    )
}

export default GeneralPage
