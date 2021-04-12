import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import { QuizProvider } from './context'

const App = () => {
  return (
    <>
      <QuizProvider>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/general' component={Home} />
          <Route exact path='/computer-science' component={Home} />
          <Route exact path='/history' component={Home} />
          <Route exact path='/geography' component={Home} />
          <Route exact path='/arts' component={Home} />
          <Route exact path='/politics' component={Home} />
        </Switch>
      </QuizProvider>
    </>
  )
}

export default App
