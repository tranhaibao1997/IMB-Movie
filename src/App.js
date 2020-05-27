import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react'
import axios from 'axios'
import SingleMovie from './SingleMovie'
import Banner from './Banner'

function App() {

  let [movieData, setMovieData] = useState(null)

  useEffect(() => {

    getDataFromAPI()
    return () => {

    }
  }, [])

  async function getDataFromAPI() {
    let APIkey = process.env.REACT_APP_APIKEY
    let res = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${APIkey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`)
    setMovieData(res.data)
  }
  console.log(movieData)
  return <Fragment>{
    movieData === null ? <><h1>Loading</h1></>
      : <>
      <Banner></Banner>
        <div className="movie-section">
        {

          movieData.results.map(movie => {
            return <SingleMovie movie={movie}></SingleMovie>
          })
        }
        </div>
      </>}</Fragment>



}

export default App;
