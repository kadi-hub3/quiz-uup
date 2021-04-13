import React, { useState } from 'react'
import { Question } from './API'


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
        </QuizContext.Provider>
    )
}
