import React from 'react'
import QuizCard from '../components/QuizCard/QuizCard'
import GeneralImg from '../images/general-img.jpg'

const GeneralPage = () => {
    return (
        <QuizCard title='General Knowledge' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.' image={GeneralImg} category='General' link='/general' />
    )
}

export default GeneralPage
