import { shuffleArray } from './utils'

export type Question = {
    answers: [string],
    category: string,
    correct_answer: string,
    difficulty: string,
    incorrect_answers: [string],
    question: string,
    type: string
}

export enum Difficulty {
    EASY = 'easy',
    MEDIUM = 'medium',
    HARD = 'hard'
}

export enum Category {
    General = 9,
    Computers = 18,
    Geography = 22,
    History = 23,
    Politics = 24,
    Arts = 25
}

export const fetchQuestions = async (amount: number, category: Category, difficulty: Difficulty) => {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`
    const data = await (await fetch(endpoint)).json()
    return data.results.map((question: Question) => {
        return {
            ...question,
            answers: shuffleArray([question.correct_answer, ...question.incorrect_answers])
        }
    })



}
