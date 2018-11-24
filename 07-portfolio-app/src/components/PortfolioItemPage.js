import React from 'react';

const PortfolioItem = (props) => {
    return (
        <div>
            <h2>Individual Portfolio number {props.match.params.id}</h2>
        </div>
    );
};

export default PortfolioItem;