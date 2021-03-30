export { }


// import React, { Component, useState, createContext } from 'react';
// import { fetchQuestions, Category, Difficulty, Question } from './API'


// const TOTAL_QUESTIONS = 10



// const QuizContext = React.createContext()

// export const QuizProvider = () => {
//     const [loading, setLoading] = useState(false)
//     const [questions, setQuestions] = useState<Question[]>([])
//     const [number, setNumber] = useState(0)
//     const [userAnswer, setUserAnswer] = useState([])
//     const [score, setScore] = useState(0)
//     const [gameOver, setGameOver] = useState(true)

//     const startQuiz = async () => {
//         setLoading(true)
//         setGameOver(false)
//         const newQueries = await fetchQuestions(TOTAL_QUESTIONS, Category.Computers, Difficulty.MEDIUM)
//         setQuestions(newQueries)
//         console.log(newQueries);
//         setNumber(0)
//         setScore(0)
//         setUserAnswer([])
//         setLoading(false)
// }
// return (
//     <>
//         <h3>Brush up your knowledge</h3>
//             {gameOver ?
//                 (<button className='start' onClick={startQuiz}>General Knowledge</button>
//                 ) : null
//             }

//             {!gameOver ? (<p>Score : {score}</p>) : null}
//             {loading ? <p>Loading Queries...</p> : null}
//             {!loading && !gameOver && (<QuestionCard
//                 questionNr={number + 1}
//                 totalQuestions={TOTAL_QUESTIONS}
//                 question={questions[number].question}
//                 answers={questions[number].answers}
//                 userAnswer={userAnswer ? true : false}
//                 callback={checkAnswer}
//             />)}
//             {!gameOver && !loading && (<button className='next' onClick={nextQuery}>Next Question</button>)}

//     </>
// );
// }