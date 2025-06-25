import React from 'react';
import "../style/NavBar.css"

export default function NavBar() {
  return (
    <div className="navbar">
      <span className="heading"> Movie Db</span>
      <input  type="text" placeholder='search...' className="search-bar"/>
    </div>
  )
}
