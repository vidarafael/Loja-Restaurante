import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import HomePage from './pages/HomePage'
import PageRequests from './pages/PageRequests'

function App(): JSX.Element {
  
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <HomePage/>
          </Route>
        </Switch>
        <Switch>
          <Route path="/page2">
            <PageRequests/>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App;


