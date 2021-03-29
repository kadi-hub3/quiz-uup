import React from 'react'

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
        <div>
            <p className='question'>Question: {questionNr} / {totalQuestions}</p>
            <p dangerouslySetInnerHTML={{ __html: question }} />
            <div>
                {answers ? (answers.map(answer => (
                    <button key={answer} disabled={userAnswer ? true : false} value={answer} onClick={callback}>
                        <span dangerouslySetInnerHTML={{ __html: answer }} />
                    </button>
                ))) : 'Answers Not Fetched'
                }
            </div>

        </div>
    )
}

export default QuestionCard
