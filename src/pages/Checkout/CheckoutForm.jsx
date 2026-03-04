import React from "react";
import Container from "../../components/Shared/Container/Container";
import { useLocation } from "react-router";
import InputField from "../../components/Shared/Input/InputField";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import CartList from "../Cart/CartList";
import Divider from "../../components/Shared/Box/Divider";

const CheckoutForm = () => {
  const location = useLocation();
  const { items, totalPrice } = location.state || { items: [], totalPrice: 0 };

  console.log(items);
  console.log(totalPrice);
  const orderInfo = {
    items,
    totalPrice,
  };
  //console.log(orderInfo);


  // const handleCheckout = (e) => {
  //   e.preventDefault();
  //   console.log("clicked");
    
  // }
  return (
    <section className="my-12 ">
      <Container>
        <div className="mb-8">
          <h3 className="text-2xl font-bold">Checkout Form</h3>
          <Divider></Divider>
        </div>
        <div>
          <form onSubmit={handleCheckout} className="">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-7 space-y-4">
                {/* name */}
                <div>
                  <label
                    className="block text-accent mb-2 font-medium"
                    htmlFor=""
                  >
                    Name
                  </label>
                  <InputField name="name" palceholder="Name" type="text" />
                </div>
                {/* email */}
                <div className=" grid grid-cols-2 gap-10">
                  <div>
                    <label
                      className="block text-accent mb-2 font-medium"
                      htmlFor=""
                    >
                      Email
                    </label>
                    <InputField name="email" palceholder="Email" type="text" />
                  </div>
                  <div>
                    <label
                      className="block text-accent mb-2 font-medium"
                      htmlFor=""
                    >
                      Phone
                    </label>
                    <InputField name="phone" palceholder="Phone" type="text" />
                  </div>
                </div>
                {/* address */}
                <div>
                  <label
                    className="block text-accent mb-2 font-medium"
                    htmlFor=""
                  >
                    Address
                  </label>
                  <InputField name="phone" palceholder="Address" type="text" />
                </div>
                {/* city state zip country*/}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                  <div>
                    <label
                      className="block text-accent mb-2 font-medium"
                      htmlFor=""
                    >
                      City
                    </label>
                    <InputField name="city" palceholder="City" type="text" />
                  </div>
                  <div>
                    <label
                      className="block text-accent mb-2 font-medium"
                      htmlFor=""
                    >
                      State
                    </label>
                    <InputField name="state" palceholder="State" type="text" />
                  </div>
                  <div>
                    <label
                      className="block text-accent mb-2 font-medium"
                      htmlFor=""
                    >
                      Zip
                    </label>
                    <InputField name="zip" palceholder="Zip" type="text" />
                  </div>
                  <div>
                    <label
                      className="block text-accent mb-2 font-medium"
                      htmlFor=""
                    >
                      Country
                    </label>
                    <InputField
                      name="country"
                      palceholder="Country"
                      type="text"
                    />
                  </div>
                </div>
              </div>

              {/* order details */}
              <div className="md:col-span-5 border border-primary/30 p-8 rounded-md">
                <h3 className="text-xl font-bold text-accent">Your Order</h3>
                <Divider />
                <div className="overflow-x-auto rounded-box">
                  <table className="table">
                    {/* head */}
                    <thead className="text-center">
                      <tr>
                        <th className="text-start">Product</th>
                        <th>Sub Total</th>
                      </tr>
                    </thead>
                    <tbody className="text-center">
                      {/* row */}
                      {items?.map((item) => (
                        <tr>
                          <th className="text-start">{item.title}</th>

                          <td>
                            {item?.offerPrice ? (
                              <p className="text-primary">
                                ${item.offerPrice}{" "}
                                <span className="text-accent text-xs line-through">
                                  ${item.price}
                                </span>
                              </p>
                            ) : (
                              <p className="text-primary"> ${item.price}</p>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot className="text-center">
                      <tr>
                        <th></th>
                        <th className="font-bold text-lg">
                          Total Amount: {totalPrice}
                        </th>
                      </tr>
                    </tfoot>
                  </table>
                </div>
                <div className="text-center">
                  <input
                    className="btn btn-primary text-white"
                    type="submit"
                    value="Confirm Order"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default CheckoutForm;
