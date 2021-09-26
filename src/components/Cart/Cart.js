import React from 'react';
import Devcart from '../Dev-cart/Devcart';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    // loop
    for (const developer of cart) {
        total = total + developer.salary;
    }
    return (
        <div className="border border-3 border-dark p-4 cart">
            <h2>Developer hired: {props.cart.length}</h2>
            <h3 className="fw-bold">Total-cost: {total}</h3>
            {
                props.cart.map(developer => <Devcart
                    developer={developer}
                >
                </Devcart>)
            }
        </div>
    );
};

export default Cart;