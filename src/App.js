import React, { Fragment, useContext } from 'react';
import './App.css';
import { useEffect, useState } from 'react'
import axios from 'axios'
import SingleMovie from './components/SingleMovie'
import Banner from './components/Banner'
import Category from './components/Category'
import { StoreContext } from './ThemeContext'
import NavBar from './components/NavBar'
import MovieList from './components/MovieList';
function App() {


  return <Fragment>
    <NavBar></NavBar>
    <Banner></Banner>
    <Category ></Category>
    <MovieList></MovieList>

  </Fragment>



}

export default App;
