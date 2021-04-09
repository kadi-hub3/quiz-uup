import React, { useContext } from 'react'
import { QuizContext } from '../../context'
import { Link } from 'react-router-dom'
import { GlobalStyle, CardWrapper } from './QuizCard.styles'
import { fetchQuestions, Category, Difficulty } from '../../API'
const TOTAL_QUESTIONS = 10

type Props = {
    title?: string,
    description: string,
    image?: string,
    category: string,
    link: string
}

const QuizCard: React.FC<Props> = ({ title, description, image, category, link }) => {
    const { setQuestions, setLoading, gameOver, setGameOver, setNumber, setUserAnswer, setScore } = useContext(QuizContext)

    const startQuiz = async (e: any) => {
        setLoading(true)
        setGameOver(false)
        let newQueries
        switch (e) {
            case 'General':
                newQueries = await fetchQuestions(TOTAL_QUESTIONS, Category.General, Difficulty.MEDIUM)
                break
            case 'CS':
                newQueries = await fetchQuestions(TOTAL_QUESTIONS, Category.Computers, Difficulty.MEDIUM)
                break
            case 'Geography':
                newQueries = await fetchQuestions(TOTAL_QUESTIONS, Category.Geography, Difficulty.MEDIUM)
                break
            case 'Arts':
                newQueries = await fetchQuestions(TOTAL_QUESTIONS, Category.Arts, Difficulty.MEDIUM)
                break
            case 'History':
                newQueries = await fetchQuestions(TOTAL_QUESTIONS, Category.History, Difficulty.MEDIUM)
                break
            case 'Politics':
                newQueries = await fetchQuestions(TOTAL_QUESTIONS, Category.Politics, Difficulty.MEDIUM)
                break

        }
        setQuestions(newQueries)
        console.log(newQueries);
        setNumber(0)
        setScore(0)
        setUserAnswer([])
        setLoading(false)
    }

    return (
        <>
            <GlobalStyle />
            <CardWrapper>
                {gameOver ? (<div className='card'>
                    <div className='imgBx'>
                        <img src={image} alt='' />
                    </div>
                    <div className='contentBx'>
                        <div className='content'>
                            <h3>{title}</h3>
                            <p>{description}</p>
                            <Link to={link}>
                                <button className='start' onClick={() => startQuiz(category)}>Start</button>
                            </Link>
                        </div>
                    </div>
                </div>) : null}
            </CardWrapper>
        </>
    )
}

export default QuizCard
