import React from 'react';
import "./Devcart.css"

const Devcart = (props) => {
    console.log(props.developer);
    // destructuring
    const { name, img } = props.developer
    return (
        <div className="devcart-container border border-3 border-dark p-3 highlight">
            <div className="img-box">
                <img src={img} alt="" />
            </div>
            <div className="text-center d-flex align-items-center">
                <h5 className="headline-color">{name}</h5>
            </div>
        </div>
    );
};

export default Devcart;