import React from 'react';
import './ItemsList.css';

const ItemsList = ({ items }) => {

    const buttonStyle = {
        border: 'none',
        background: 'transparent'
    }

    const renderedList = items.map((item, index) => {
        return (
            <tr key={item.id}>
                <td>{item.incExp}</td>
                <td>{item.desc}</td>
                <td>
                    <div className="pr-2 d-inline">{item.amount}</div>
                    <div className="icon">
                        <button style={buttonStyle}><i className="far fa-times-circle text-danger" onClick={() => item.delItem(index)}></i></button>
                    </div>
                </td>
            </tr>
        ); 
    });
    return <tbody>{renderedList}</tbody>;
};

export default ItemsList;
