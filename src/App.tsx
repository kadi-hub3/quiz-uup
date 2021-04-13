import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import QuizPage from './pages/QuizPage'
import { QuizProvider } from './context'

const App = () => {
  return (
    <>
      <QuizProvider>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/general' component={QuizPage} />
          <Route exact path='/computer-science' component={QuizPage} />
          <Route exact path='/history' component={QuizPage} />
          <Route exact path='/geography' component={QuizPage} />
          <Route exact path='/arts' component={QuizPage} />
          <Route exact path='/politics' component={QuizPage} />
        </Switch>
      </QuizProvider>
    </>
  )
}

export default App
