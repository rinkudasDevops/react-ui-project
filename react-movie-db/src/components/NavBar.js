import React from 'react';
import "../style/NavBar.css"


const API_BASE_URL = https://www.omdbapi.com/?s=avatar&apikey=b1cb7932;

export default function NavBar() {
  return (
    <div className="navbar">
      <span className="heading"> Movie Db</span>
      <input  type="text" placeholder='search...' className="search-bar"/>
    </div>
  )
}
