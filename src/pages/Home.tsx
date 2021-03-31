import React, { useState } from 'react'
import { fetchQuestions, Category, Difficulty, Question } from '../API'
import QuestionCard from '../components/QuestionCard';
import { Link } from 'react-router-dom'
import { GlobalStyle, CardWrapper, Title } from './Home.styles'
import GeneralImg from '../images/general-img.jpg'
import CSImg from '../images/CS-img.jpg'
import HistoryImg from '../images/history-img.jpg'
import GeoImg from '../images/geo-img.jpg'
import ArtslImg from '../images/religion-img.jpg'
import PoliticslImg from '../images/politics-img.jpg'
import { FiLogOut } from 'react-icons/fi'

const TOTAL_QUESTIONS = 10

export type AnswerObject = {
    question: string,
    answer: string,
    correct: boolean,
    correctAnswer: string

}

const Home = () => {
    const [loading, setLoading] = useState(false)
    const [questions, setQuestions] = useState<Question[]>([])
    const [number, setNumber] = useState(0)
    const [userAnswer, setUserAnswer] = useState<AnswerObject[]>([])
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

    const checkAnswer = (e: any) => {
        if (!gameOver) {
            const answer = e.currentTarget.value
            const correct = questions[number].correct_answer === answer
            if (correct) setScore((prev) => prev + 1)

            const answerObject = {
                question: questions[number].question,
                answer,
                correct,
                correctAnswer: questions[number].correct_answer
            }

            setUserAnswer(prev => [...prev, answerObject])
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
            <CardWrapper>
                {gameOver ?
                    (
                        <div className='card'>
                            <div className='imgBx'>
                                <img src={GeneralImg} alt='' />
                            </div>
                            <div className='contentBx'>
                                <div className='content'>
                                    <h3>General Knowledge</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit dis, vehicula viverra </p>
                                    <Link to='/general'>
                                        <button className='start' onClick={startGeneralQuiz}>Start</button>
                                    </Link>
                                </div>
                            </div>

                        </div>
                    ) : null
                }

                {gameOver ?
                    (
                        <div className='card'>
                            <div className='imgBx'>
                                <img src={CSImg} alt='' />
                            </div>
                            <div className='contentBx'>
                                <div className='content'>
                                    <h3>Computer Science</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit dis, vehicula viverra </p>
                                    <Link to='/computer-science'>
                                        <button className='start' onClick={startCSQuiz}>Start</button>
                                    </Link>
                                </div>
                            </div>

                        </div>
                    ) : null
                }
                {gameOver ?
                    (
                        <div className='card'>
                            <div className='imgBx'>
                                <img src={GeoImg} alt='' />
                            </div>
                            <div className='contentBx'>
                                <div className='content'>
                                    <h3>Geography</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit dis, vehicula viverra </p>
                                    <Link to='/geography'>
                                        <button className='start' onClick={startGeoQuiz}>Start</button>
                                    </Link>
                                </div>
                            </div>

                        </div>
                    ) : null
                }

                {gameOver ?
                    (
                        <div className='card'>
                            <div className='imgBx'>
                                <img src={PoliticslImg} alt='' />
                            </div>
                            <div className='contentBx'>
                                <div className='content'>
                                    <h3>Politics</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit dis, vehicula viverra </p>
                                    <Link to='/politics'>
                                        <button className='start' onClick={startPoliticsQuiz}>Start</button>
                                    </Link>
                                </div>
                            </div>

                        </div>
                    ) : null
                }

                {gameOver ?
                    (
                        <div className='card'>
                            <div className='imgBx'>
                                <img src={HistoryImg} alt='' />
                            </div>
                            <div className='contentBx'>
                                <div className='content'>
                                    <h3>History</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit dis, vehicula viverra </p>
                                    <Link to='/history'>
                                        <button className='start' onClick={startHistoryQuiz}>Start</button>
                                    </Link>
                                </div>
                            </div>

                        </div>
                    ) : null
                }

                {gameOver ?
                    (
                        <div className='card'>
                            <div className='imgBx'>
                                <img src={ArtslImg} alt='' />
                            </div>
                            <div className='contentBx'>
                                <div className='content'>
                                    <h3>Liberal Arts</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit dis, vehicula viverra </p>
                                    <Link to='/arts'>
                                        <button className='start' onClick={startArtsQuiz}>Start</button>
                                    </Link>
                                </div>
                            </div>

                        </div>
                    ) : null
                }

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
                {!gameOver && number !== TOTAL_QUESTIONS - 1 && (<button className='next' onClick={nextQuery}>Next Question</button>)}
                {!gameOver && !loading && (<button className='next log-out'>
                    <Link to='/'><FiLogOut className='log-icon' /></Link>
                </button>)}
            </CardWrapper>
        </>
    );
}

export default Home;


