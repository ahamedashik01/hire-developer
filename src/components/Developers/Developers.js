import React from 'react';
import './Developers.css'

const Developers = (props) => {
    //destructuring
    const { name, age, img, designation, country, salary } = props.developer;
    return (
        <div className="dev-card border border-3 border-dark p-3">
            <div className="dev-img text-center">
                <img src={img} alt="web-developer" />
                <div className="social mt-3">
                    <i className="fab fa-twitter fs-3 me-2"></i>
                    <i className="fab fa-github fs-3"></i>
                </div>
            </div>
            <div className="dev-info text-start mt-5 highlight p-3">
                <h6><span className="fw-bold headline-color">Name:</span> {name}</h6>
                <h6><span className="fw-bold headline-color">Designation:</span> {designation} </h6>
                <h6><span className="fw-bold headline-color">Country:</span> {country}</h6>
                <h6><span className="fw-bold headline-color">Age:</span> {age}</h6>
                <h6><span className="fw-bold headline-color">Salary:</span> ${salary}</h6>
                <button onClick={() => props.handleCart(props.developer)} className="button-text-color button-color btn my-2"> <i class="fas fa-user-plus"></i> Hire</button>
            </div>
        </div>

    );
};

export default Developers;