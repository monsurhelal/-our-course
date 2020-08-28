import React from 'react';
import './cart.css';


const Cart = (props) => {
    const cart = props.cart;
    const totalPrice = cart.reduce((total,prd) => total + prd.price,0);
    let shipingCost = 0;
    if(totalPrice > 30){

        shipingCost = 8;
    }
    return (
        <div>
            <h1>coure summary</h1>
            <p>add course :{cart.length}</p>
            <p>shiping cost :$ {shipingCost}</p>
            <p>total price :$ {totalPrice + shipingCost}</p>
            <button className="addBtn">reviw order</button>
        </div>
    );
};

export default Cart;