import React from 'react'
import { Title } from './Home.styles'
import HistoryPage from './HistoryPage'
import ArtsPage from './ArtsPage'
import PoliticsPage from './PoliticsPage'
import CSPage from './CSPage'
import GeoPage from './GeoPage'
import GeneralPage from './GeneralPage'



const Home: React.FC = () => {
    return (
        <>
            <Title>Brush up <span> ur knowledge</span></Title>
            <div>
                <GeneralPage />
                <CSPage />
                <GeoPage />
                <PoliticsPage />
                <HistoryPage />
                <ArtsPage />
            </div>
        </>
    )

}

export default Home

