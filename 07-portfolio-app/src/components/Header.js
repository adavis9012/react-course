import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Portfolio</h1>
        <nav>
            <ul>
                <li>
                    <NavLink to="/" exact={true} activeClassName="is-active" >Home</NavLink>
                </li>
                <li>
                    <NavLink to="/portfolio" exact={true} activeClassName="is-active" >Portfolio</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" exact={true} activeClassName="is-active" >Contact</NavLink>
                </li>
            </ul>
        </nav>
    </header>
);

export default Header;