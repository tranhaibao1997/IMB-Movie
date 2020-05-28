import React, { Fragment, useContext } from 'react';
import { useEffect, useState } from 'react'
import axios from 'axios'
import SingleMovie from './SingleMovie'
import { StoreContext } from './../ThemeContext'
import Pagination from "react-pagination-library";
import "react-pagination-library/build/css/index.css";


function MovieList() {


    let { movie, page, totalPage,changePage,currentGenres } = useContext(StoreContext)

    // const totalPage = 0
    // const changeCurrentPage = numPage => {
    //     context.setCurrentPage(numPage)
    //     console.log(numPage)
    //     props.getProductList(props.searchText,numPage);
    //   };
    useEffect(() => {

        getDataFromAPI(1)
        return () => {

        }
    }, [])



    async function getDataFromAPI(numPage) {
        let APIkey = process.env.REACT_APP_APIKEY
        let url=`https:api.themoviedb.org/3/movie/now_playing?api_key=${APIkey}&language=en-US&page=${numPage}&with_genres=${currentGenres[0]}`
        let res = await axios.get(url)
        console.log(url)
        movie[1](res.data)
        totalPage[1](res.data.total_pages)
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
