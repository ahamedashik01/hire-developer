import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Developers from '../Developers/Developers';
import './Main.css'

const Main = () => {
    // useState 
    const [developers, setDevelopers] = useState([]);
    const [cart, setCart] = useState([])
    // useEffect
    useEffect(() => {
        fetch('./fakeData.JSON')
            .then(res => res.json())
            .then(data => setDevelopers(data))
    }, [])
    // EventListener
    const handleCart = developer => {
        const newCart = [...cart, developer];
        setCart(newCart);
    }
    return (
        <div className="container row mx-auto my-4">
            <div className="dev-gallary col-md-8">
                <div className="dev-card-container">
                    {
                        developers.map(developer => <Developers
                            key={developer.id}
                            developer={developer}
                            handleCart={handleCart}
                        >
                        </Developers>)
                    }
                </div>
            </div>
            <div className="cart col-md-4 text-center ">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Main;