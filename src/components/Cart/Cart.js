import React from 'react';
import Devcart from '../Dev-cart/Devcart';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    console.log(props.cart)
    let total = 0;
    for (const developer of cart) {
        total = total + developer.salary;
    }
    return (
        <div className="border border-3 border-dark p-4 cart">
            <h1>total added : {props.cart.length}</h1>
            <p>totat : {total}</p>
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