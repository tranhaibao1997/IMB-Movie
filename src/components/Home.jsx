import React from "react";
import Category from "./Category";
import MovieList from "./MovieList";
import SideBar from "./SideBar";

export default function Home() {
  return (
    <div className="my-container">
      <Category></Category>
      <div className="movie-sidebar-wrapper">
        <MovieList></MovieList>
        <SideBar></SideBar>
      </div>
    </div>
  );
}
