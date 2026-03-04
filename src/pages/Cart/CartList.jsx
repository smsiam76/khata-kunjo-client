import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { FiTrash2 } from "react-icons/fi";

const CartList = ({ cart, quantity }) => {
  const [count, setCount] = useState(0);
  console.log(count);
  const { thumbnail, title, brand } = cart;

  // const handleCountQuantity = (e) => {
  //   e.preventDefault();
  //   quantity = count;
  // };
 // console.log(quantity);

  return (
    <tr>
      <td>
        <img
          className="h-24 w-24 object-cover mx-auto"
          src={thumbnail}
          alt={title}
        />
      </td>
      <td className="text-start">
        <h4 className="text-xl font-medium">{title}</h4>
        <p>{brand}</p>
      </td>
      <td className="">
        <div className="">
          {cart?.offerPrice ? (
            <p className=" text-base font-medium text-primary">
              ${cart.offerPrice}{" "}
              <span className="text-accent md:text-sm text-xs line-through">
                ${cart.price}
              </span>
            </p>
          ) : (
            <p className="text-primary"> ${cart.price}</p>
          )}
        </div>
      </td>

      <td>
        <div className="relative w-24 mx-auto border border-primary/10 h-12 flex items-center justify-center">
          <button
            className="cursor-pointer bg-primary"
            type="button"
            onClick={() => setCount(count - 1)}
          >
            <FaMinus className="absolute top-1/2 left-3 -translate-y-1/2" />
          </button>
          <p className="text-lg">{count}</p>
          <button
            className="cursor-pointer bg-primary py-2 bg-primary/10"
            type="button"
            onClick={() => setCount(count + 1)}
          >
            {" "}
            <FaPlus className="absolute top-1/2 right-3 -translate-y-1/2" />
          </button>
        </div>
        {/* <form
          onSubmit={handleCountQuantity}
          className="flex items-center gap-4 mb-4"
        >
          <div className="relative w-24 mx-auto">
            <button
              className="cursor-pointer bg-primary"
              type="button"
              onClick={() => setCount(count - 1)}
            >
              <FaMinus className="absolute top-1/2 left-3 -translate-y-1/2" />
            </button>
            <label htmlFor=""></label>
            <input
              type="text"
              name=""
              id=""
              onChange={(e) => {
                const val = parseInt(e.target.value, 10);
                if (!isNaN(val) && val >= 0) setCount(val);
              }}
              className="py-2 px-8 border outline-0 w-full text-center border-accent/20"
              value={count}
            />
            <button
              className="cursor-pointer bg-primary py-2"
              type="button"
              onClick={() => setCount(count + 1)}
            >
              {" "}
              <FaPlus className="absolute top-1/2 right-3 -translate-y-1/2" />
            </button>
          </div>
        </form> */}
      </td>
      <th>
        <button className="text-red-400 bg-red-100 p-3 transiton-all ease-in-out duration-300 hover:bg-red-500 hover:text-white cursor-pointer rounded-md">
          <FiTrash2 />
        </button>
      </th>
    </tr>
  );
};

export default CartList;
