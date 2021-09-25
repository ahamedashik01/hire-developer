import React, { useEffect, useState } from 'react';
import './Main.css'

const Main = () => {
    const [developers, setDevelopers] = useState([])
    useEffect(() => {
        fetch('./fakeData.JSON')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])
    return (
        <div className="container row mx-auto">
            <div className="dev-gallary col-md-8">
                <h1>Developers</h1>

            </div>
            <div className="cart col-md-4 text-center ">
                <h1>total</h1>
            </div>
        </div>
    );
};

export default Main;