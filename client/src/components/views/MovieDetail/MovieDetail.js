import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { API_URL, API_KEY, IMG_BASE_URL } from "../../../Config";
import { Button, Row } from "antd";
import MainImage from "../LandingPage/Sections/MainImage";
import MovieInfo from "./Sections/MovieInfo";
import Favorite from "./Sections/Favorite";
import GridCards from "../GridCard/GridCards";

function MovieDetail(props) {
  let movieId = props.match.params.movieId;
  const [Movie, setMovie] = useState([]);
  const [Cast, setCast] = useState([]);
  const [Loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetchDetailInfo();
  }, []);

  const fetchDetailInfo = () => {
    // TMDB movie APIs
    let endpointCast = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
    let endpointInfo = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
    console.log("endpointInfo", endpointInfo);

    // Fetch movie information from API
    fetch(endpointInfo)
      .then((response) => response.json())
      .then((response) => {
        setMovie(response);
        setLoaded(true);
      });

    // Fetch cast information from API
    fetch(endpointCast)
      .then((response) => response.json())
      .then((response) => {
        setCast(response.cast);
      });
  };

  return (
    <div style={{ width: "100%", margin: "0", marginTop: "68px" }}>
      {/* HEADER ========================================================== */}
      <MainImage
        image={`${IMG_BASE_URL}w1280${Movie.backdrop_path}`}
        title={Movie.original_title}
        text={Movie.overview}
      />

      
      <div style={{ width: "95%", margin: "1rem auto" }}>
        
        {Loaded ? (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Favorite
              movieInfo={Movie}
              movieId={movieId}
              userFrom={localStorage.getItem("userId")}
            />
          </div>
        ) : (
          <div>loading...</div>
        )}

        
        <MovieInfo movie={Movie} />
        <br />

       
        
        {
          
          <Row gutter={[24, 12]}>
           {Cast &&
              Cast.map((cast, index) => (
                <React.Fragment key={index}>
                  <GridCards
                    image={cast.profile_path ? `${IMG_BASE_URL}w500${cast.profile_path}` : null}
                    characterName={cast.name}
                  />
                </React.Fragment>
              ))}
          </Row>
        }
      </div>
    </div>
  );
}

export default withRouter(MovieDetail);
