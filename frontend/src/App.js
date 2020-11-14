import React from 'react';
import './App.css';
import Header from './components/Header';
import {BrowserRouter, Route} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import TrendingScreen from './screens/TrendingScreen';
import Nav from './components/Nav';
import { useState } from 'react';
import requests from './requests';


function App() {
  const [genre, setGenre] = useState(requests.fetchTrending);
  console.log(genre)
  
  let active = window.location.href.split("/")[3];
  console.log(active);
  if(active === ""){
    active = "home";
  }

  return (
    <BrowserRouter>
      <div className="app">
        <Header path={active} />
        <Nav setGenre={setGenre} />

        <Route path="/" component={() => <HomeScreen genre={`${genre}`} />} />
        <Route path="/trending" component={TrendingScreen} />
      </div>
    </BrowserRouter>
  );
}

export default App;
