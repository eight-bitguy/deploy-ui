import React from 'react';

const MyButton = (props) => {
    return (
        <div className={`my-button-container ${props.disabled ? '-disabled' : ''}`}>
        <button
            onClick={props.onClick}
            disabled={props.disabled}
            className={`my-button ${props.className ?? ''}`}>
            <div className='button-loader-container'>{props.label}</div>
        </button>
        </div>
    );
};

export default MyButton;