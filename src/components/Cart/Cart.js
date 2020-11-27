import React from 'react';

const Cart = (props) => {
    const cart =  props.cart;
    let totalPrice =cart.reduce((total, cart)=> total + cart.price, 0)
    return (
        <div id='cart'>
            <h4>Course Added: {cart.length}  </h4>
            <h4>Total Price: ${totalPrice} </h4>
        </div>
    );
};

export default Cart;