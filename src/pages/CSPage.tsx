import React from 'react'
import QuizCard from '../components/QuizCard/QuizCard'
import CSImg from '../images/CS-img.jpg'

const CSPage = () => {
    return (
        <QuizCard title='Computer Science' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.' image={CSImg} category='CS' link='/computer-science' />
    )
}

export default CSPage
