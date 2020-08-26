 import React from "react";
 import "../CSS/components.css";
 import "../CSS/global.css";
 import "../CSS/layout.css"
 import "../CSS/sample-wallpaper.css";
 import img1 from "../images/hulk-1.jpg";
 import img2 from "../images/venom-1.jpg";
 import img3 from "../images/venom-2.jpg";
 
 export default function Header() {
     return (
        <header className="header">
        <div className="container">
          <h1 className="title">Mavel's Fearless</h1>
          <p className="subtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. beatae
            molestias earum eveniet.
          </p>
          <div className="search-bar">
            <input type="search" placeholder="Search" />
          </div>
  
          {/* <!-- Sample Wallpaper --> */}
          <div className="sample-wallpaper">
            {/* <!-- Wallpaper #1 --> */}
            <article className="wallpaper">
              <img src={img1} alt="Wallpaper #1" className="wallpaper" />
            </article>
  
            {/* <!-- Wallpaper #2 --> */}
            <article className="wallpaper">
              <img src={img2} alt="Wallpaper #1" className="wallpaper" />
            </article>
  
            {/* <!-- Wallpaper #3 --> */}
            <article className="wallpaper">
              <img src={img3} alt="Wallpaper #1" className="wallpaper" />
            </article>
          </div>
        </div>
      </header>
     )
 }
 