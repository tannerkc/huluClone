import React from 'react';
import requests from '../requests';
import './css/Nav.css';

function Nav({ setGenre }) {
    return (
        <div className="nav">
            <h2 onClick={()=>setGenre(requests.fetchTrending)}>Trending</h2>
            <h2 onClick={()=>setGenre(requests.fetchTopRated)}>Top Rated</h2>
            <h2 onClick={()=>setGenre(requests.fetchComedyMovies)}>Comedy</h2>
            <h2 onClick={()=>setGenre(requests.fetchActionMovies)}>Action</h2>
            <h2 onClick={()=>setGenre(requests.fetchRomanceMovies)}>Romance</h2>
            <h2 onClick={()=>setGenre(requests.fetchAnimatedMovies)}>Animated</h2>
            <h2 onClick={()=>setGenre(requests.fetchHorrorMovies)}>Horror</h2>
            <h2 onClick={()=>setGenre(requests.fetchSciFiMovies)}>Sci-Fi</h2>
            <h2 onClick={()=>setGenre(requests.fetchMysteryMovies)}>Mystery</h2>
        </div>
    )
}

export default Nav;
