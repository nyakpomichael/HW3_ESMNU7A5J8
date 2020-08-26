import React from "react"
import "../CSS/layout.css"

export default function Nav() {
    return (
        <nav className="navbar">
      <div className="container"> 
        <a href="#">Hulk</a>
        {/* <!-- Currently Active -->       */}
        <a href="#" className="logo is-active">Mavel</a>
        <a href="#">Venom</a>
      </div>
    </nav>

    )
}
