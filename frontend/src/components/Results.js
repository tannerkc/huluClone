import React, {useEffect, useState} from 'react';
import VideoCard from './VideoCard';
import "./css/Results.css";
import axios from '../axios';

function Results({genre}) {
    const [movies, setMovies] = useState([]);


    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(genre);
            console.log(request);
            setMovies(request.data.results);
            return request;
        }

        fetchData();
        return () => {
        }
    }, [genre])

    return (
        <div className="results">
            {movies.map((movie)=>(
                <VideoCard key={movie.id} movie={movie} />
            ))}
        </div>
    )
}

export default Results;
