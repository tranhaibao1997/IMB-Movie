import React from "react";
import Category from "./Category";
import MovieList from "./MovieList";
import SideBar from "./SideBar";
import Banner from './Banner'

export default function Home() {
  return (
    <div className="my-container">
      <Banner></Banner>
      <Category></Category>
      <div className="movie-sidebar-wrapper">
        <MovieList></MovieList>
        <SideBar></SideBar>
      </div>
    </div>
  );
}
