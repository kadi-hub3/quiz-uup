import React from 'react'
import { Button, Wrapper } from './QuestionCard.styles'

type Props = {
    question: string,
    answers: [string],
    userAnswer: any,
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
                    <Button key={answer}>
                        <button disabled={userAnswer ? true : false} value={answer} onClick={callback}>
                            <span dangerouslySetInnerHTML={{ __html: answer }} />
                        </button>
                    </Button>
                ))
                }
            </div>

        </Wrapper>
    )
}

export default QuestionCard
