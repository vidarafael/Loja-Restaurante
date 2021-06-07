import React, { useEffect } from 'react';
import {useParams} from 'react-router'

import {BrowserRouter as BwRouter, Switch, Route} from 'react-router-dom'

import Home from './pages/HomePage'
import Menu from './pages/MenuPage'
import Requests from './pages/Requests'
import Foods from './components/Foods'

function App(): JSX.Element {
  
  return (
    <>
      <BwRouter>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
        </Switch>

        <Switch>
          <Route path="/menu/:food">
            <Foods/>
          </Route>
        </Switch>

        <Switch>
          <Route path="/menu">
            <Menu/>
          </Route>
        </Switch>

        <Switch>
          <Route path="/pedidos">
            <Requests/>
          </Route>
        </Switch>
      </BwRouter>
    </>
  )
}

export default App;


