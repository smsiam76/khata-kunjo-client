
// import React, { useEffect, useState } from 'react';
// import {  addToStoredCart, getStoredCart } from '../utility/addToDB';

// export const useCart = (products) => {
//     const [carts, setCarts] = useState([]);

//     useEffect(() => {
//         if(!products || products.length === 0) return;

//         const storedCartData = getStoredCart();
//         const myCartList = products.filter(product => storedCartData.includes(product._id));
//         setCarts(myCartList)
//     }, [products]);
//     const addToCart = (id) => {
//         addToStoredCart(id);
//         const updateCart  = products.filter(product => getStoredCart().includes(product._id));
//         setCarts(updateCart);
//     }
//     return {carts, addToCart};
// };

// export default useCart;



import React, { useEffect, useState } from 'react';
import {  addToStoredCart, getStoredCart } from '../utility/addToDB';

export const useCart = (products) => {
    const [carts, setCarts] = useState([]);

    useEffect(() => {
        if(!products || products.length === 0) return;

        const storedCartData = getStoredCart();
        const myCartList = products.filter(product => storedCartData.includes(product._id));
        setCarts(myCartList)
    }, [products]);
    const addToCart = (id) => {
        addToStoredCart(id);
        const updateCart  = products.filter(product => getStoredCart().includes(product._id));
        setCarts(updateCart);
    }
    return {carts, addToCart};
};

export default useCart;