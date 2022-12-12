import './btn.css';
import React from 'react';

const Btn = ({handleClick, customClass, name}) => {
    return (
        <button
        className={`btn ${customClass ? customClass : ''}`}
        onClick={handleClick}
        >
        {name}
        </button>
    )
}

export default Btn;