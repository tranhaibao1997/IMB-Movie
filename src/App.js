import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import MovieDetail from './components/MovieDetail';

function App() {


  return (
  
  <Router>
  <Fragment>


    <NavBar></NavBar>
    <Switch>
    <Route exact path="/" component={Home}></Route>
    <Route exact path="/movie/:id" component={MovieDetail}></Route>
    <Home></Home>
    </Switch>
   


  </Fragment>
  </Router>


  )
}
  

export default App;
