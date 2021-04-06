import React from 'react'
import QuizCard from '../components/QuizCard'
import ArtsImg from '../images/religion-img.jpg'

const ArtsPage = () => {
    return (
        <QuizCard title='Arts' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.' image={ArtsImg} category='Arts' link='/arts' />
    )
}

export default ArtsPage
