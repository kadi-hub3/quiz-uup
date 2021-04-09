import React from 'react'
import QuizCard from '../components/QuizCard/QuizCard'
import PoliticsImg from '../images/politics-img.jpg'

const PoliticsPage = () => {
    return (
        <QuizCard title='Politics' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.' image={PoliticsImg} category='Politics' link='/politics' />
    )
}

export default PoliticsPage
