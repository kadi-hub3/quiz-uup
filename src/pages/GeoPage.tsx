import React from 'react'
import QuizCard from '../components/QuizCard/QuizCard'
import GeoImg from '../images/geo-img.jpg'

const GeoPage = () => {
    return (
        <QuizCard title='Geography' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.' image={GeoImg} category='Geography' link='/geography' />
    )
}

export default GeoPage
