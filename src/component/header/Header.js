import React from 'react'
import logo from '../../images/logo.png'
import './Header.css'

function Header() {
    return (
        <div className="emaJohnimg">
            <h1>my amajon site</h1>
            <img src={logo} alt=""/>

            <nav className="nav-ber">
            <a href="/shop">shop</a>
            <a href="/review">review</a>
            <a href="/inventory">manage</a>
            <a href="/login">login</a>
            </nav>
        </div>
    )
}

export default Header
