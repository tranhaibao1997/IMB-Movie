import React from 'react'
import Category from './Category'
import MovieList from './MovieList'

export default function Home() {
    return (
        <div className="container">
            <Category></Category>
            <MovieList></MovieList>
        </div>
    )
}
