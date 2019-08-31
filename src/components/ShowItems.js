import React from 'react';
import ItemsList from './ItemsList';

const ShowItems = ({items}) => {
    
    return (
        
        <div className="container">
            <table className="table table-hover table-striped">
                <thead>
                    <tr>
                        <th>Inc/Exp</th>
                        <th>Description</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <ItemsList items={items} />
            </table>
        </div>
    );
}

export default ShowItems;


