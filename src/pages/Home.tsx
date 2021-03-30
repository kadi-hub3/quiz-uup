import React, { useState } from 'react'
import { fetchQuestions, Category, Difficulty, Question } from '../API'
import QuestionCard from '../components/QuestionCard';
import { Link } from 'react-router-dom'
import { GlobalStyle, AppWrapper, Title } from './Home.styles'
import GeneralImg from '../images/general-img.jpg'
import CSImg from '../images/CS-img.jpg'
import HistoryImg from '../images/history-img.jpg'
import GeoImg from '../images/geo-img.jpg'
import ArtslImg from '../images/religion-img.jpg'
import PoliticslImg from '../images/politics-img.jpg'
const TOTAL_QUESTIONS = 10



const Home = () => {
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
    const startHistoryQuiz = async () => {
        setLoading(true)
        setGameOver(false)
        const newQueries = await fetchQuestions(TOTAL_QUESTIONS, Category.History, Difficulty.MEDIUM)
        setQuestions(newQueries)
        console.log(newQueries);
        setNumber(0)
        setScore(0)
        setUserAnswer([])
        setLoading(false)

    }
    const startArtsQuiz = async () => {
        setLoading(true)
        setGameOver(false)
        const newQueries = await fetchQuestions(TOTAL_QUESTIONS, Category.Arts, Difficulty.MEDIUM)
        setQuestions(newQueries)
        console.log(newQueries);
        setNumber(0)
        setScore(0)
        setUserAnswer([])
        setLoading(false)

    }
    const startGeoQuiz = async () => {
        setLoading(true)
        setGameOver(false)
        const newQueries = await fetchQuestions(TOTAL_QUESTIONS, Category.Geography, Difficulty.MEDIUM)
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
        <>
            <GlobalStyle />
            <Title>Brush up <span>your knowledge</span></Title>
            <AppWrapper>
                {gameOver ?
                    (<Link to='/general'>
                        <div className='card' onClick={startGeneralQuiz}>
                            <div className='imgBx'>
                                <img src={GeneralImg} alt='' />
                            </div>
                            <div className='contentBx'>
                                <div className='content'>
                                    <h3>General Knowledge</h3>
                                    <p>Lorem ipsum fsdjfhsosdhfosfsodhf</p>
                                    <button className='start'>Start</button>
                                </div>
                            </div>

                        </div>
                    </Link>) : null
                }

                {gameOver ?
                    (<Link to='/computer-science'>
                        <div className='card' onClick={startCSQuiz}>
                            <div className='imgBx'>
                                <img src={CSImg} alt='' />
                            </div>
                            <div className='contentBx'>
                                <div className='content'>
                                    <h3>Computer Science</h3>
                                    <p>Lorem ipsum fsdjfhsosdhfosfsodhf</p>
                                    <button className='start'>Start</button>
                                </div>
                            </div>

                        </div>
                    </Link>) : null
                }
                {gameOver ?
                    (<Link to='/geography'>
                        <div className='card' onClick={startGeoQuiz}>
                            <div className='imgBx'>
                                <img src={GeoImg} alt='' />
                            </div>
                            <div className='contentBx'>
                                <div className='content'>
                                    <h3>Geography</h3>
                                    <p>Lorem ipsum fsdjfhsosdhfosfsodhf</p>
                                    <button className='start'>Start</button>
                                </div>
                            </div>

                        </div>
                    </Link>) : null
                }

                {gameOver ?
                    (<Link to='/politics'>
                        <div className='card' onClick={startPoliticsQuiz}>
                            <div className='imgBx'>
                                <img src={PoliticslImg} alt='' />
                            </div>
                            <div className='contentBx'>
                                <div className='content'>
                                    <h3>Politics</h3>
                                    <p>Lorem ipsum fsdjfhsosdhfosfsodhf</p>
                                    <button className='start'>Start</button>
                                </div>
                            </div>

                        </div>
                    </Link>) : null
                }

                {gameOver ?
                    (<Link to='/history'>
                        <div className='card' onClick={startHistoryQuiz}>
                            <div className='imgBx'>
                                <img src={HistoryImg} alt='' />
                            </div>
                            <div className='contentBx'>
                                <div className='content'>
                                    <h3>History</h3>
                                    <p>Lorem ipsum fsdjfhsosdhfosfsodhf</p>
                                    <button className='start'>Start</button>
                                </div>
                            </div>

                        </div>
                    </Link>) : null
                }

                {gameOver ?
                    (<Link to='/arts'>
                        <div className='card' onClick={startArtsQuiz}>
                            <div className='imgBx'>
                                <img src={ArtslImg} alt='' />
                            </div>
                            <div className='contentBx'>
                                <div className='content'>
                                    <h3>Liberal Arts</h3>
                                    <p>Lorem ipsum fsdjfhsosdhfosfsodhf</p>
                                    <button className='start'>Start</button>
                                </div>
                            </div>

                        </div>
                    </Link>) : null
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
            </AppWrapper>
        </>
    );
}

export default Home;


