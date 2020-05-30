import React from "react";
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { StoreContext } from "./../ThemeContext";
import {Link} from 'react-router-dom'

export default function MovieDetail({ match }) {
  const [movieDetails, setMovieDetails] = React.useState(null);
  const [movieReview, setMovieReview] = React.useState(null);
  let {
    movie
  } = React.useContext(StoreContext);

  React.useEffect(() => {
    getMovieDetailsFromAPI(match.params.id);

    return () => {};
  }, []);

  async function getMovieDetailsFromAPI(id) {
    let APIkey = process.env.REACT_APP_APIKEY;
    let url = `https://api.themoviedb.org/3/movie/${id}?api_key=${APIkey}&language=en-US`;
    let res = await Axios.get(url);
    setMovieDetails(res.data);
    getMovieReviewFromAPI(id);
  }
  async function getMovieReviewFromAPI(id) {
    let APIkey = process.env.REACT_APP_APIKEY;
    let url = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${APIkey}&language=en-US&page=1`;
    let res = await Axios.get(url);
    setMovieReview(res.data);
  }



  console.log(movieDetails);
  console.log(movieReview);
  return (
    <>
      {movieDetails === null || movieReview === null ? (
        <div>Loading</div>
      ) : (
        <>
          {/* breadcrumb-area-start */}
          <section
            className="breadcrumb-area"
            style={{
              backgroundImage:
                'url("https://images.hdqwalls.com/download/polygonal-abstract-red-dark-background-eo-1280x1024.jpg")',
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="breadcrumb-text text-center">
                    <h1 style={{color:"white"}}>BAO IMB </h1>
                    <ul className="breadcrumb-menu">
                      <li>
                        <Link to="/">home</Link>
                      </li>
                      <li>
                        <span>{movieDetails.title}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* breadcrumb-area-end */}
          {/* shop-area start */}
          <section className="shop-details-area pt-100 pb-100">
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-4">
                  <div className="product-details-img mb-10">
                    <div className="tab-content" id="myTabContentpro">
                      <div
                        className="tab-pane fade show active"
                        id="home"
                        role="tabpanel"
                      >
                        <div className="product-large-img">
                          <img
                            src={`https://image.tmdb.org/t/p/original//${movieDetails.poster_path}`}
                            alt=""
                          />
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="profile"
                        role="tabpanel"
                      >
                        <div className="product-large-img">
                          <img src="img/product/pro2.jpg" alt="" />
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="profile1"
                        role="tabpanel"
                      >
                        <div className="product-large-img">
                          <img src="img/product/pro3.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="shop-thumb-tab mb-30">
                    <ul className="nav" id="myTab2" role="tablist">
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          id="home-tab"
                          data-toggle="tab"
                          href="#home"
                          role="tab"
                          aria-selected="true"
                        >
                          <img src="img/product/pro1.jpg" alt="" />{" "}
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          id="profile-tab"
                          data-toggle="tab"
                          href="#profile"
                          role="tab"
                          aria-selected="false"
                        >
                          <img src="img/product/pro2.jpg" alt="" />
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          id="profile-tab2"
                          data-toggle="tab"
                          href="#profile1"
                          role="tab"
                          aria-selected="false"
                        >
                          <img src="img/product/pro3.jpg" alt="" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-8">
                  <div className="product-details mb-30 pl-30">
                    <div className="details-cat mb-20">
                      <ul className="movie-details-genres">
                        {movieDetails.genres.map((genres) => {
                          return <li>{genres.name}</li>;
                        })}
                      </ul>
                    </div>
                    <h1 className="pro-details-title mb-15">
                      {movieDetails.original_title}
                    </h1>
                    <h3 className="pro-details-tagline mb-15">
                      {movieDetails.tagline}
                    </h3>
                    <div className="movie_social_details">
                      <ul>
                        <li>
                          <i className="fab fa-imdb imb-icon">
                            <span className="imb-score">
                              {movieDetails.vote_average}
                            </span>
                          </i>
                        </li>
                        <li>
                          <i className="fas fa-users users-icon">
                            <span className="imb-score">
                              {movieDetails.popularity}
                            </span>
                          </i>
                        </li>
                        <li>
                          <i className="material-icons">
                            {movieDetails.adult ? (
                              <span className="eightteen">18+</span>
                            ) : (
                              <span className="eightteen">Under 18</span>
                            )}
                          </i>
                        </li>
                      </ul>
                    </div>
                    <div className="product-variant">
                      <div className="product-desc variant-item">
                        <p>{movieDetails.overview}</p>
                      </div>
                      <div className="product-info-list variant-item">
                        <ul>
                          <li>
                            <span>Budget</span> ${movieDetails.budget}
                          </li>
                          <li>
                            <span>Revenue</span> ${movieDetails.revenue}
                          </li>
                          <li>
                            <span>Release Day</span> {movieDetails.release_date}
                          </li>
                          <li>
                            <span>Time</span> {movieDetails.runtime}
                          </li>
                        </ul>
                      </div>
                      <div className="product-action-details variant-item">
                        <div className="product-details-action">
                          <form action="#">
                            <button
                              className="details-action-icon"
                              type="submit"
                            >
                              <i className="fas fa-heart" />
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-50">
                <div className="col-xl-12 col-lg-12">
                  <div className="product-review">
                    <ul
                      className="nav review-tab"
                      id="myTabproduct"
                      role="tablist"
                    >
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          id="profile-tab6"
                          data-toggle="tab"
                          href="#profile6"
                          role="tab"
                          aria-controls="profile"
                          aria-selected="false"
                        >
                          Reviews ({movieReview.results.length})
                        </a>
                      </li>
                    </ul>
                    <div className="tab-content" id="myTabContent2">
                      <div
                        className="tab-pane show active"
                        id="profile6"
                        role="tabpanel"
                        aria-labelledby="profile-tab6"
                      >
                        <div className="desc-text review-text">
                          <div className="product-commnets">
                            {movieReview.results.map((review) => {
                              return (
                                <div className="product-commnets-list mb-25 pb-15">
                                  <div className="pro-comments-img">
                                    <img
                                      src="img/product/comments/02.png"
                                      alt=""
                                    />
                                  </div>
                                  <div className="pro-commnets-text">
                                    <h4>{review.author}</h4>

                                    <p>{review.content}</p>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                          <div className="review-box mt-50">
                            <h4>Add a Review</h4>
                            <div className="your-rating mb-40">
                              <span>Your Rating:</span>
                              <div className="rating-list">
                                <a href="#">
                                  <i className="far fa-star" />
                                </a>
                                <a href="#">
                                  <i className="far fa-star" />
                                </a>
                                <a href="#">
                                  <i className="far fa-star" />
                                </a>
                                <a href="#">
                                  <i className="far fa-star" />
                                </a>
                                <a href="#">
                                  <i className="far fa-star" />
                                </a>
                              </div>
                            </div>
                            <form className="review-form" action="#">
                              <div className="row">
                                <div className="col-xl-12">
                                  <label htmlFor="message">YOUR REVIEW</label>
                                  <textarea
                                    name="message"
                                    id="message"
                                    cols={30}
                                    rows={10}
                                    defaultValue={""}
                                  />
                                </div>
                                <div className="col-xl-6">
                                  <label htmlFor="r-name">Name</label>
                                  <input type="text" id="r-name" />
                                </div>
                                <div className="col-xl-6">
                                  <label htmlFor="r-email">Email</label>
                                  <input type="email" id="r-email" />
                                </div>
                                <div className="col-xl-12">
                                  <button className="btn theme-btn">
                                    Add your Review
                                  </button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4">
                  <div className="pro-details-banner">
                    <a href="shop.html">
                      <img src="img/banner/pro-details.jpg" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* shop-area end */}
        </>
      )}
    </>
  );
}
