import React from 'react'
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from './Comp/header/Header'
import Pages from './pages/Pages'

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact>
            <Pages />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App