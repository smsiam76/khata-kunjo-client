import React from "react";

import { FaHeart, FaLink, FaRegStar, FaStar } from "react-icons/fa";
import Button from "../Button/Button";
import { Link } from "react-router";

const ProductCard = ({ product }) => {
  const productStock = (product?.sold / product?.stock) * 100;
  console.log(productStock);

  return (
    <Link to={`/products/${product?._id}`} className="">
      <div className="group relative overflow-hidden border border-accent/10 rounded-md bg-white w-full transition-all duration-300 ease-in-out hover:border-primary hover:bg-black/5 ring-1 ring-accent/5 hover:ring-primary">
        {/* product image */}
        <figure className="cursor-pointer flex items-center justify-center py-3">
          <img
            className="w-full h-28 md:h-36 lg:h-48 object-cover px-0 md:px-0 transition-transform duration-500 ease-in-out group-hover:backdrop-opacity-45 group-hover:scale-110"
            src={product.thumbnail}
            alt={product.title}
          />
          {/* overlay hover*/}
          <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/50" />
          {/* <div className="absolute inset-0 bg-white/0 backdrop-blur-0 transition-all duration-500 group-hover:bg-white/10 group-hover:backdrop-blur-xs" /> */}
        </figure>

        {/* product details */}
        <div className="text-accent px-3 py-2 md:py-3 md:px-4 border-t border-primary/20">
          {/* product name here */}
          <p className="text-accent font-medium text-sm md:text-base truncate w-full mb-1">
            {product.title}
          </p>

          {/* product rating here */}
          <div className="flex items-center gap-0.5">
            {Array(5)
              .fill("")
              .map((_, i) =>
                product.rating > i ? (
                  <FaStar key={i} className="text-primary text-[12px]" />
                ) : (
                  <FaRegStar key={i} className="text-primary text-[12px]" />
                ),
              )}
          </div>

          {/* product price here */}
          <div className="flex items-end justify-between mt-2">
            <p className="text-base font-medium">
              {product?.offerPrice ? (
                <p className="text-primary">
                  ${product.offerPrice}{" "}
                  <span className="text-accent text-xs line-through">
                    ${product.price}
                  </span>
                </p>
              ) : (
                <p className="text-primary"> ${product.price}</p>
              )}
            </p>
          </div>

          {/* stock quantity part */}
          <div className="flex justify-between items-center gap-2 md:gap-10 mt-2">
            <p className="flex-1 text-[10px] md:text-xs">Stock Level</p>

            <progress
              className="flex-1 progress progress-accent"
              value={product?.sold}
              max={product?.stock}
            ></progress>
          </div>
        </div>

        {/* hover part */}

        {/* top left part */}
        <div className="flex flex-col gap-2 absolute top-4 left-0 -translate-x-3 opacity-0 transition-all ease-in-out duration-300 group-hover:opacity-100 group-hover:translate-x-3 ">
          <span className="w-fit p-2 border border-primary/20 bg-white rounded-md text-accent transition-colors ease-in-out duration-300 hover:text-primary cursor-pointer">
            <FaHeart size={12} />
          </span>
          <span className="w-fit p-2 border border-primary/20 bg-white rounded-md text-accent transition-colors ease-in-out duration-300 hover:text-primary cursor-pointer">
            <FaLink size={12} />
          </span>
        </div>

        {/*hover from bottom part */}
        <div className="absolute left-0 bottom-0 w-full bg-white/95 px-3 pt-2 pb-4 rounded-b-md translate-y-full opacity-0 transition-all ease-in-out duration-300  group-hover:translate-y-0 group-hover:opacity-100 border-t border-primary/20">
          <div className="text-accent text-sm">
            {/* <p>{product.category}</p> */}
            <p className="text-accent font-medium text-sm truncate w-full mb-1">
              {product.title}
            </p>

            {/* rating part here */}
            <div className="flex items-center gap-0.5">
              {Array(5)
                .fill("")
                .map((_, i) =>
                  product.rating > i ? (
                    <FaStar key={i} className="text-primary text-[12px]" />
                  ) : (
                    <FaRegStar key={i} className="text-primary text-[12px]" />
                  ),
                )}
            </div>

            {/* price section here */}
            <div className="flex items-end justify-between mt-1">
              <p className="text-base font-medium text-indigo-500">
                {product?.offerPrice ? (
                  <p className="text-primary">
                    ${product.offerPrice}{" "}
                    <span className="text-accent md:text-sm text-xs line-through">
                      ${product.price}
                    </span>
                  </p>
                ) : (
                  <p className="text-primary"> ${product.price}</p>
                )}
              </p>
            </div>
          </div>
          <Link to="/carts">
            <Button className="mt-2" card>
              Add to Cart
            </Button>
          </Link>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
