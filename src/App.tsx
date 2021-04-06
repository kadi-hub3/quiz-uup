import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import HistoryPage from './pages/HistoryPage'
import ArtsPage from './pages/ArtsPage'
import PoliticsPage from './pages/PoliticsPage'
import CSPage from './pages/CSPage'
import GeoPage from './pages/GeoPage'
import GeneralPage from './pages/GeneralPage'
import { QuizProvider } from './context'

const App = () => {
  return (
    <>
      <QuizProvider>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/general' component={GeneralPage} />
          <Route exact path='/computer-science' component={CSPage} />
          <Route exact path='/history' component={HistoryPage} />
          <Route exact path='/geography' component={GeoPage} />
          <Route exact path='/arts' component={ArtsPage} />
          <Route exact path='/politics' component={PoliticsPage} />
        </Switch>
      </QuizProvider>
    </>
  )
}

export default App
