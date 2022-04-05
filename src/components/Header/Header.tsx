import React from 'react'
import './Header.scss'

interface Props {
    scrolled: boolean;
}

const Header: React.FC<Props> = ({ scrolled }) => {
    return <header className = {`bg-red main-header ${scrolled && "scrolled"}`}>
        <div><a href = "www.google.com">Logo</a></div>
        <input type="checkbox" id="menu-btn" className = "menu-btn" />
        <label htmlFor="menu-btn"  className = "menu-icon">
            <span className = "menu-icon__line"></span>
        </label>
        <ul className = "nav-links">
            <li className="nav-link"><a className = "nav__link" href="www.google.com">about</a></li>
            <li className="nav-link"><a className = "nav__link" href="www.google.com">portfolio</a></li>
            <li className="nav-link"><a className = "nav__link" href="www.google.com">contact</a></li>
        </ul>
    </header>
}

export default Header