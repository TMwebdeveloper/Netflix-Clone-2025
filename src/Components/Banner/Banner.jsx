import React, { useEffect, useState } from "react";
import requests from "../../utils/requests";
import axios from "../../utils/axios";
import "./banner.css"

const Banner = () => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await axios.get(requests.fetchNetflixOriginals); // This line makes an API call using axios.
        const randomIndex = Math.floor(
          Math.random() * request.data.results.length
        );
        setMovie(request.data.results[randomIndex]); //Updates the movie state with the randomly selected show and This allows the banner to show the selected show’s image and title.

        // .
      } catch (error) {
        console.error("Error fetching banner data:", error); //It logs the error to the console.
        setMovie({}); //It resets movie to an empty object
      }
    };

    fetchData(); // calls the function after defining it This starsts an API request.
  }, []); //Run fetchData() only once when the Banner component loads

  function truncate(str, n) {
    //truncate Shortens long text with "..."
    return str?.length > n ? str.slice(0, n - 1) + "..." : str;
  }
  

  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`, //Sets background image

        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button play">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="banner_fadeBottom" />
    </div>
  );
};

export default Banner;
