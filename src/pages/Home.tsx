import React from 'react'
import QuizCard from '../components/QuizCard/QuizCard'
import HistoryImg from '../images/history-img.jpg'
import GeoImg from '../images/geo-img.jpg'
import GeneralImg from '../images/general-img.jpg'
import CSImg from '../images/CS-img.jpg'
import PoliticsImg from '../images/politics-img.jpg'
import ArtsImg from '../images/religion-img.jpg'
import Title from '../components/Title/Title'
import { GlobalStyle } from './Home.styles'


const Home: React.FC = () => {
    return (
        <>
            <GlobalStyle />
            <Title />
            <QuizCard title='General Knowledge' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.' image={GeneralImg} category='General' link='/general' />
            <QuizCard title='History' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.' image={HistoryImg} category='History' link='/history' />
            <QuizCard title='Geography' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.' image={GeoImg} category='Geography' link='/geography' />
            <QuizCard title='Computer Science' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.' image={CSImg} category='CS' link='/computer-science' />
            <QuizCard title='Politics' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.' image={PoliticsImg} category='Politics' link='/politics' />
            <QuizCard title='Arts' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.' image={ArtsImg} category='Arts' link='/arts' />

        </>
    )

}

export default Home

