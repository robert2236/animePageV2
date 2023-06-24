import React from 'react'


export  function Navbar() {
  return (
    <>
     <header>
        <a href="#" className="logo"><i className="fas fa-infinity"></i>Laser Anime.</a>
        <nav className="navbar">
          {/* <a href="index.html">home</a>
          <a href="#anime">anime</a>
          <a href="#action">action</a>
          <a href="#child">child</a>
          <a href="#family">family</a> */}
        </nav>
        <div className="icons">
          <i className="fas fa-bars large-icon " id="menu-bars" ></i>
          <i className="fas fa-search fa-sm" id="search-icon"></i>
          <a className="aul" href="/login"><i className="fa-solid fa-user"></i></a>
          <a href="#" className="fas fa-heart"></a>
        </div>
      </header>

    </>
  )
}
