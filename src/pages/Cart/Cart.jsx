import React, { useState } from "react";
import Container from "../../components/Shared/Container/Container";
import Divider from "../../components/Shared/Box/Divider";
import { useLoaderData, useNavigate } from "react-router";

import CartList from "./CartList";
import Button from "../../components/Shared/Button/Button";
import useCart from "../../hooks/useCart";
import CheckoutForm from "../Checkout/CheckoutForm";

const Cart = () => {
  const products = useLoaderData();
  const { carts } = useCart(products);
  const navigate = useNavigate();
  //console.log(products);
  //console.log(carts);

  const quantity = 0;
  const handleCheckOut = () => {
   // console.log("chek out");
    navigate("/checkout", {
      state: {
        items: carts,
        totalPrice: carts?.reduce(
          (acc, item) => acc + item.price * (item.quatity || 1),
          0,
        ),
      },
    });
  };

  return (
    <section className="my-16">
      <Container>
        <div>
          <h4>Carts</h4>
          <Divider />
          <div className="overflow-x-auto">
            <table className="table text-center">
              {/* head */}
              <thead>
                <tr>
                  <th>Thumbnail</th>
                  <th className="text-start">Product Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {carts?.map((cart, idx) => (
                  <CartList
                    key={cart._id}
                    idx={idx}
                    cart={cart}
                    quantity={quantity}
                  ></CartList>
                ))}
              </tbody>
            </table>
            <div className="text-center">
              <Button onClick={handleCheckOut}>Checkout</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Cart;
