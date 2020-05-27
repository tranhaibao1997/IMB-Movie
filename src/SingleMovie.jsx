import React from "react";

export default function SingleMovie({ movie }) {

  return (
      <>
      <div className="movie_card" id="bright">
  <div className="info_section">
    <div className="movie_header">
      <img className="locandina" src={`https://image.tmdb.org/t/p/w200//${movie.poster_path}`}/>
      <h1>{movie.original_title}</h1>
      <h4>2017, David Ayer</h4>
      <span className="minutes">117 min</span>
      <p className="type">Action, Crime, Fantasy</p>
    </div>
    <div className="movie_desc">
      <p className="text">
      {movie.overview}
      </p>
    </div>
    <div className="movie_social">
      <ul>
        <li><i className="material-icons">{movie.vote_average}</i></li>
        <li><i className="material-icons">{movie.vote_count}</i></li>
        <li><i className="material-icons">movie.adult</i></li>
      </ul>
    </div>
  </div>
  <div className="blur_back bright_back" style={{ backgroundImage: "url(" + `https://image.tmdb.org/t/p/w500//${movie.backdrop_path}`   + ")"}}></div>
</div>
      </>
   
  );
}
