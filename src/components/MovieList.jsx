import React, { Fragment, useContext } from 'react';
import { useEffect, useState } from 'react'
import axios from 'axios'
import SingleMovie from './SingleMovie'
import { StoreContext } from './../ThemeContext'
import Pagination from "react-pagination-library";
import "react-pagination-library/build/css/index.css";
import FilterDropDown from './FilterDropDown'




function MovieList() {





    let { movie, page, totalPage, changePage, currentGenres,filterType } = useContext(StoreContext)



    useEffect(() => {

        getDataFromAPI(1)
        return () => {

        }
    }, [])



    async function getDataFromAPI(numPage) {
        let APIkey = process.env.REACT_APP_APIKEY
        let url=""
        if(filterType[0]===null)
        {
            url = `https:api.themoviedb.org/3/movie/now_playing?api_key=${APIkey}&language=en-US&page=${numPage}&with_genres=${currentGenres[0]}`
        }
        else
        {
            url=`https://api.themoviedb.org/3/discover/movie?api_key=${APIkey}&language=en-US&sort_by=${filterType[0]}&include_adult=true&include_video=false&page=${numPage}`
        }
        let res = await axios.get(url)
        movie[1](res.data)
        totalPage[1](res.data.total_pages)
        console.log(res.data)
        console.log(url, "this is URL")
    }
    changePage = numPage => {
        page[1](numPage)

        getDataFromAPI(numPage)


        // props.getProductListBySearch(numPage)
        //fetch a data  
        //or update a query to get data
    };
    console.log(page[0])

    return <Fragment>
        {
            movie[0] === null ? <><h1>Loading</h1></>
                : <>

                    <div className="Pagination">
                        <FilterDropDown></FilterDropDown>


                        <Pagination
                            currentPage={page[0]}
                            totalPages={totalPage[0]}
                            changeCurrentPage={changePage}
                            theme="square-fill"
                        />

                    </div>

                    <div className="movie-section">
                        {

                            movie[0].results.map(movie => {
                                return <SingleMovie movie={movie} ></SingleMovie>
                            })
                        }
                    </div>
                </>}</Fragment>



}

export default MovieList;
