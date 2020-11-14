import React from 'react';
import "./css/VideoCard.css";
import ThumbsUp from "@material-ui/icons/ThumbUpSharp";


const img_base_url = "https://image.tmdb.org/t/p/original/"

function VideoCard({ movie }) {
    return (
    <div className="videoCard">
        

        <img src={`${img_base_url}${movie.backdrop_path || movie.poster_path}`} alt="movie cover" />

        <p className="movieDescription truncate">{movie.overview}</p>
        <h2>{movie.title || movie.original_name}</h2>

    <span className="likes">
        <p>{movie.vote_count}</p>
        <ThumbsUp />
        <span>|</span>
        {movie.release_date || movie.first_air_date}
        </span>

    </div>
        );
}

export default VideoCard;
