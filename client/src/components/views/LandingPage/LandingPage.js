import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { Button, Row } from "antd";
import "./LandingPage.css";
import { API_URL, API_KEY, IMG_BASE_URL } from "../../../Config";
import MainImage from "./Sections/MainImage";
import GridCards from "../GridCard/GridCards";

function LandingPage() {
  const [Movies, setMovies] = useState([]);
  const [MainMovieImage, setMainMovieImage] = useState(null);
  const [pageNum, setpageNum] = useState(0);
  const [Movies1, setMovies1] = useState([]);
  const [searchresults, setSearchresults] = useState([]);
  const [search, setSearch] = useState('') 
  const [svisible, setSvisible] = useState(false)
 const [pageNum1, setpageNum1] = useState(0);
  useEffect(() => {
   const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    fetchMovies(endpoint);
  }, []);

  useEffect(() => {
    const endpoint1 = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}&language=en-US&page=1`;
    fetchMovies1(endpoint1);
  }, []);

  const fetchMovies = (endpoint) => {
    fetch(endpoint)
      .then((response) => response.json())
      .then((response) => {
        setMovies([...Movies, ...response.results]);
        setMainMovieImage(response.results[0]);
        setpageNum(response.page);
      });
  };
  const fetchMovies1 = (endpoint1) => {
    fetch(endpoint1)
      .then((response) => response.json())
      .then((response) => {
        setMovies1([...Movies1, ...response.results]);
        setpageNum1(response.page);
      });
  };

  const searchMovies = (event) => {
    event.preventDefault();
    setSvisible(true)
    const endpoint2 = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${search}&page=1`
    searchMovies1(endpoint2)
    console.log(searchresults);
  }
  const showWhenVisible = { display: svisible ? 'flex' : 'none',justifyContent:"CENTER" }
  const searchMovies1 = (endpoint2) => {
    
    fetch(endpoint2)
      .then((response) => response.json())
      .then((response) => {
        setSearchresults([...response.results]);
        setSearch('')
      });
    
  }
  
const loadMoreMovies = () => {
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${
      pageNum + 1
    }`;
    fetchMovies(endpoint);
  };

  const loadMoreMovies1 = () => {
    const endpoint = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}&language=en-US&page=${
      pageNum1 + 1
      }`;
    fetchMovies(endpoint);
  };
  
  return (
    <div style={{ width: "100%", margin: "0", marginTop:"60px" }}>
     
      <nav className="navbar navbar-light bg-light" >
        <div className="container-fluid">
          <form className="d-flex w-100" id="srh" onSubmit={searchMovies}>
            <input
              className="form-control me-2"
              type="search"
             placeholder="Search Movies"
              aria-label="Search" 
              value={search}
              onChange={({ target }) => setSearch(target.value)}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
      
      <div className="" id="main-wrapper" style={{ width: "100%", margin: "", borderRadius: "10px" }}>
        <h2 id="AS" className="text-warning bg-dark" style={showWhenVisible}>Search Results</h2>
       
        <Row gutter={[24, 24]}>
          {searchresults &&
            searchresults.map((movie, index) => (
                
              <React.Fragment key={index}>
                <GridCards
                  landingPage
                  image={movie.poster_path ? `${IMG_BASE_URL}w500${movie.poster_path}` : null}
                  movieID={movie.id}
                  movieName={movie.original_title}
                  reviews={movie.vote_average}
                />
              </React.Fragment>
            ))}
        </Row>
      </div>

    

     
      {MainMovieImage && (
        <MainImage
          image={`${IMG_BASE_URL}w1280${MainMovieImage.backdrop_path}`}
          title={MainMovieImage.original_title}
          text={MainMovieImage.overview}  
          
        />
      )}

      {/* MOVIE GRID CARDS */}
      <div className="" id="main-wrapper" style={{ width: "97%", margin: "1rem auto", borderRadius:"10px" }}>
        <h2 className="text-warning bg-dark" id="ltst" style={{ display: "flex", justifyContent: "center", fontWeight: "Bold" }}>Latest Movies</h2>
        <hr />
        <Row gutter={[24, 24]}>
          {Movies &&
            Movies.map((movie, index) => (
              <React.Fragment key={index}>
                <GridCards
                  landingPage
                  image={movie.poster_path ? `${IMG_BASE_URL}w500${movie.poster_path}` : null}
                  movieID={movie.id}
                  movieName={movie.original_title}
                  reviews={movie.vote_average}
                />
              </React.Fragment>
            ))}
        </Row>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <button type="button" className="btn btn-warning" onClick={loadMoreMovies}>See More</button>
      </div>

      <div className="" id="main-wrapper" style={{ width: "94%", margin: "1rem auto", borderRadius: "10px" }}>
        <h2 className="text-warning bg-dark" id="mpm" style={{ display: "flex", justifyContent: "center",fontWeight:"Bold" }}>Most Popular Movies</h2>
        <hr />
        <Row gutter={[24, 24]}>
          {Movies1 &&
            Movies1.map((movie, index) => (
              <React.Fragment key={index}>
                <GridCards
                  landingPage
                  image={movie.poster_path ? `${IMG_BASE_URL}w500${movie.poster_path}` : null}
                  movieID={movie.id}
                  movieName={movie.original_title}
                  reviews={movie.vote_average}
                />
              </React.Fragment>
            ))}
        </Row>
      </div>

      
    </div>
  );
}

export default withRouter(LandingPage);
