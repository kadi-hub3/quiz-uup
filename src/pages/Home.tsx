import React from 'react'
// import { Title } from './Home.styles'
import HistoryPage from './HistoryPage'
import ArtsPage from './ArtsPage'
import PoliticsPage from './PoliticsPage'
import CSPage from './CSPage'
import GeoPage from './GeoPage'
import GeneralPage from './GeneralPage'
import Title from '../components/Title/Title'


const Home: React.FC = () => {
    return (
        <>
            <Title />
            <GeneralPage />
            <CSPage />
            <GeoPage />
            <PoliticsPage />
            <HistoryPage />
            <ArtsPage />
        </>
    )

}

export default Home

