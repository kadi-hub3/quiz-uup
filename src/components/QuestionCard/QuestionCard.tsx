import React from 'react'
import { Button, Wrapper } from './QuestionCard.styles'
import { AnswerObject } from '../../context'


type Props = {
    question: string,
    answers: [string],
    userAnswer: AnswerObject | undefined,
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void,
    questionNr: number,
    score: string,
    nextQuery: (e: React.MouseEvent<HTMLButtonElement>) => void,
    totalQuestions: number
}

const QuestionCard: React.FC<Props> = ({ question, answers, userAnswer, questionNr, totalQuestions, score, nextQuery, callback }) => {
    return (
        <Wrapper>
            <p className='question'>Question: {questionNr} / {totalQuestions}</p>
            <p className='score'>Score : {score}</p>
            <p dangerouslySetInnerHTML={{ __html: question }} />
            <div>
                {answers && answers.map(answer => (
                    <Button
                        key={answer}
                        correct={userAnswer?.correctAnswer === answer}
                        userClicked={userAnswer?.answer === answer}
                    >
                        <button disabled={userAnswer ? true : false} value={answer} onClick={callback}>
                            <p dangerouslySetInnerHTML={{ __html: answer }} />
                        </button>
                    </Button>
                ))
                }
            </div>
            <button className='next' onClick={nextQuery}>Next Question</button>
        </Wrapper>
    )
}

export default QuestionCard
