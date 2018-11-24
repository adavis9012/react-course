import React from 'react';
import { NavLink } from 'react-router-dom';

const PortfolioPage = () => (
    <div>
        <h2>Choose a portfolio!</h2>
        <ul>
            <li>
                <NavLink to="/portfolio/1">Portfolio 1</NavLink>
            </li>
            <li>
                <NavLink to="/portfolio/2">Portfolio 2</NavLink>
            </li>
        </ul>
    </div>
);

export default PortfolioPage;