import React from 'react';

import './css/Header.css';

import HomeIcon from "@material-ui/icons/Home";
import HotIcon from "@material-ui/icons/Whatshot";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import SearchIcon from "@material-ui/icons/Search";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";

function Header(props) {

    const refreshScreen = (path) =>{
        window.location.href = path;
    }

    return (
        <div className="header">
            <div className="header_icons">

                <div className="header_icon" id={props.path === "home" ?'active':''} onClick={()=>refreshScreen("/")}>
                    <HomeIcon />
                    <p>Home</p>
                </div>

                <div className="header_icon" id={props.path === "trending" ?'active':''} onClick={() =>refreshScreen("/trending")}>
                    <HotIcon />
                    <p>Trending</p>
                </div>

                <div className="header_icon" id={props.path === "live" ?'active':''} onClick={() =>refreshScreen("/live")}>
                    <LiveTvIcon />
                    <p>Live</p>
                </div>

                <div className="header_icon" id={props.path === "collections" ?'active':''} onClick={() =>refreshScreen("/collections")}>
                    <VideoLibraryIcon />
                    <p>Collections</p>
                </div>

                <div className="header_icon" id={props.path === "search" ?'active':''} onClick={() =>refreshScreen("/search")}>
                    <SearchIcon />
                    <p>Search</p>
                </div>

                <div className="header_icon" id={props.path === "account" ?'active':''} onClick={() =>refreshScreen("/account")}>
                    <PersonOutlineIcon />
                    <p>Account</p>
                </div>

            </div>
            <img src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png" alt="icon" />
        </div>
    )
}

export default Header;
