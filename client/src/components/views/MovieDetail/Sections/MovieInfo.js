import React from "react";
import { Descriptions } from "antd";

function MovieInfo(props) {
  let { movie } = props;

  // Simple way to humanize revenue number
  const humanizeNum = (num) => {
    if (num) {
      var strNum = num.toString();
      var splitNum = [];
      for (let i = strNum.length; i >= 0; i -= 3) {
        var chunk = strNum.slice(i - 3, i);
        if (chunk) {
          splitNum.unshift(chunk);
        }
      }
      return "$" + splitNum.join();
    }
  };

  return (
    <>
     <h2 className="text-warning bg-dark" style={{ display: "flex", justifyContent: "center", fontWeight: "Bold" }}>Movie Details</h2>
    <Descriptions bordered style={{fontWeight: "Bold",fontSize:"30px"}} >
      <Descriptions.Item className="text-warning bg-dark" label="Title">{movie.original_title}</Descriptions.Item>
      <Descriptions.Item className="text-warning bg-dark" label="Release Date">{movie.release_date}</Descriptions.Item>
      <Descriptions.Item className="text-warning bg-dark" label="Duration">{movie.runtime} minutes</Descriptions.Item>
      <Descriptions.Item className="text-warning bg-dark" label="Status">{movie.status}</Descriptions.Item>
      <Descriptions.Item className="text-warning bg-dark" label="IMDb Score" span={2}>
        {movie.vote_average} / 10
      </Descriptions.Item>
    </Descriptions>
      <h2 className="text-danger bg-dark" style={{ display: "flex", justifyContent: "center", fontWeight: "Bold", marginTop:"20px" }}>Cast</h2>
    </>
  );
}

export default MovieInfo;
