import React from 'react';

const Total = props => {
    return (
        <div className="jumbotron jumbotron-fluid text-center bg-success mb-0 py-4">
            <div className="container">
                <h1>Budget Total</h1>
                <h2>${props.total}</h2>
            </div>
        </div>
    );
}

export default Total;

