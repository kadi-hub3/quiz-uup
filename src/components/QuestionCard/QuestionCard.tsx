import React from 'react'
import { Button, Wrapper } from './QuestionCard.styles'
import { AnswerObject } from '../../context'


type Props = {
    question: string,
    answers: [string],
    userAnswer: AnswerObject | undefined,
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void,
    questionNr: number,
    totalQuestions: number
}

const QuestionCard: React.FC<Props> = ({ question, answers, userAnswer, questionNr, totalQuestions, callback }) => {
    return (
        <Wrapper>
            <p className='question'>Question: {questionNr} / {totalQuestions}</p>
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

        </Wrapper>
    )
}

export default QuestionCard
