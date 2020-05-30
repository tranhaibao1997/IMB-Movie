import React from "react";
import Slider from "react-slick";
import Axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SingleCardSlider from "./SingleCardSlider";

export default function Banner() {
  const [topMovie, setTopMovie] = React.useState(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  React.useEffect(() => {
    getTopMovieAPI();
    return () => {};
  }, []);

  async function getTopMovieAPI() {
    let APIkey = process.env.REACT_APP_APIKEY;
    let url = `https://api.themoviedb.org/3/movie/popular?api_key=${APIkey}&language=en-US&page=1`;
    let res = await Axios.get(url);
    var size = 5;
    var arrayOfArrays = [];
    for (var i = 0; i < res.data.results.length; i += size) {
      arrayOfArrays.push(res.data.results.slice(i, i + size));
    }
    setTopMovie(arrayOfArrays);
  }
  console.log(topMovie);
  return (
    <>
      {topMovie === null ? (
        <div>Loading</div>
      ) : (
        <>
          <h1 className="title">Top Popular Movies</h1>
          <Slider {...settings}>
            {topMovie.map((array) => {
            return (
              
                
                  <div className="each-slider">
                  {array.map((movie) => {
                    return <SingleCardSlider movie={movie}></SingleCardSlider>;
                  })}
                    </div>
                
            
            );
          })}
          </Slider>
        </>
      )}
    </>
  );
}
