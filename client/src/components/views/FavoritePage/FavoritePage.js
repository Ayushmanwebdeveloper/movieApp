import React, { useEffect, useState } from "react";
import { Table, Tag, Button, Popover, message } from "antd";
import { IMG_BASE_URL } from "../../../Config";
import Axios from "axios";

function FavoritePage() {
  const [Favorites, setFavorites] = useState([]);
  let userInfo = { userFrom: localStorage.getItem("userId") };

  useEffect(() => {
    fetchFavoriteMovie();
  }, []);

  console.log("Favorites", Favorites);

  const fetchFavoriteMovie = () => {
    Axios.post("/api/favorite/getFavoriteMovies", userInfo).then((response) => {
      if (response.data.success) {
        setFavorites(response.data.favorites);
      } else {
        alert("Error: Failed to get movies to watch");
      }
    });
  };

  const onClickDelete = (movieId, userFrom) => {
    const variables = {
      movieId,
      userFrom,
    };

    Axios.post("/api/favorite/removeFromFavorite", variables).then((response) => {
      if (response.data.success) {
        fetchFavoriteMovie();
        message.success({
          content: "Removed from the watchlist.",
          style: { marginTop: "10vh" },
        });
      } else {
        alert("Error: Failed to remove from the watch list.");
      }
    });
  };

  const popoverContent = (poster) => (
    <div>
      {poster ? (
        <img src={`${IMG_BASE_URL}w500${poster}`} style={{ width: "200px" }} />
      ) : (
        "No image"
      )}
    </div>
  );
let tagColors = {
    Action: "cyan",
    Adventure: "green",
    Animation: "pink",
    Comedy: "volcano",
    Crime: "error",
    Documentary: "gray",
    Drama: "blue",
    Family: "yellow",
    Fantasy: "purple",
    History: "gold",
    Horror: "red",
    Music: "lime",
    Mystery: "magenta",
    Romance: "pink",
    "Science Fiction": "geekblue",
    Thriller: "warning",
    "TV Movie": "blue",
    War: "warning",
    Western: "gold",
  };

  const columns = [
    {
      title: "Movie Title",
      dataIndex: "title",
      key: "title",
      render: (text, record) => (
        <Popover content={popoverContent(record.moviePoster)} placement="right">
          {record.title}
        </Popover>
      ),
    },
    {
      title: "Movie Runtime",
      dataIndex: "runtime",
      key: "runtime",
    },
    {
      title: "Movie Genres",
      key: "tags",
      dataIndex: "tags",
      responsive: ["md"],
      render: (tags) => (
        <>
          {tags.map((tag) => {
            return (
              <Tag color={tagColors[tag.name]} key={tag.id}>
                {tag.name}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Remove from Favorite",
      dataIndex: "action",
      key: "action",
      render: (text, record) => (
        <button
          type="primary"
          class="btn btn-warning"
          danger
         onClick={() => onClickDelete(record.movieId, record.userFrom)}
        >
          Delete
        </button>
      ),
    },
  ];

  const data = Favorites.map((favorite, index) => ({
    key: index,
    title: favorite.movieTitle,
    runtime: favorite.movieRuntime + " min",
    tags: favorite.movieGenre.slice(0, 3),
    movieId: favorite.movieId,
    userFrom: favorite.userFrom,
    moviePoster: favorite.moviePoster,
  }));

  return (
    <div style={{ width: "85%", margin: "3rem auto", fontWeight: "Bold" }}>
      <h2 className="text-warning bg-dark" style={{ display: "flex", justifyContent: "center", fontWeight: "Bold", marginBottom: "2rem", marginTop:"100px" }}>Watching Page</h2>
      <Table columns={columns} dataSource={data} pagination={{ pageSize: 10 }} />
    </div>
  );
}

export default FavoritePage;
