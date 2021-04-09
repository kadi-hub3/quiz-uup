import React from 'react'
import QuizCard from '../components/QuizCard/QuizCard'
import HistoryImg from '../images/history-img.jpg'

const HistoryPage = () => {
    return (
        <QuizCard title='History' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.' image={HistoryImg} category='History' link='/history' />

    )
}

export default HistoryPage
