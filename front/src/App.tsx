import React from 'react';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import './style.css'

import {BrowserRouter as BwRouter, Switch, Route} from 'react-router-dom'
import foodReducer from './reducer/foodReducer'

import Home from './pages/HomePage'
import Menu from './pages/MenuPage'
import Requests from './pages/Requests'
import Foods from './components/Foods'

const store = createStore(foodReducer)

function App(): JSX.Element {
  
  return (
    <>
      <Provider store={store}>
        <BwRouter>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
          </Switch>

          <Switch>
            <Route path="/menu">
              <Menu/>
            </Route>
          </Switch>

          <Switch>
            <Route path="/menu/:food">
              <Foods/>
            </Route>
          </Switch>

          <Switch>
            <Route path="/pedidos">
              <Requests/>
            </Route>
          </Switch>
        </BwRouter>
      </Provider>
    </>
  )
}

export default App;


