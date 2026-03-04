import React from "react";
import Container from "../../components/Shared/Container/Container";
import { Link, useLoaderData, useNavigate } from "react-router";
import InputField from "../../components/Shared/Input/InputField";
import { FaPlus } from "react-icons/fa6";
import {
  FaFacebookF,
  FaMinus,
  FaPen,
  FaRegHeart,
  FaWhatsapp,
} from "react-icons/fa";
import Button from "../../components/Shared/Button/Button";
import Divider from "../../components/Shared/Box/Divider";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { addToStoredCart } from "../../utility/addToDB";

const ProductDetails = () => {
  //const [count, setCount] = useState(0);
  const singleProduct = useLoaderData();
  const navigate = useNavigate();

  // console.log(singleProduct);
  const {
    title,
    thumbnail,
    category,
    description,
    price,
    size,
    pages,
    stock,
    offerPrice,
    brand,
    quality,
    productCode,
    gsm,
  } = singleProduct;

  const handleAddToCart = (id) => {
    addToStoredCart(id);
    navigate("/cart");
  };

  const message = `আমি ${singleProduct?.title} (${singleProduct?.productCode})অর্ডার করতে চাই`;
  const encoded = encodeURIComponent(message);

  return (
    <section className="py-8 md:py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 mb-8">
          <figure className="md:col-span-5">
            <img
              className="w-full md:h-110 object-cover rounded-md"
              src={thumbnail}
              alt=""
            />
          </figure>
          <div className="md:col-span-7">
            <h3 className="text-accent text-2xl font-bold">{title}</h3>
            <div className="mb-4">
              <p>
                Brand: <span className="text-primary font-medium">{brand}</span>
              </p>

              {offerPrice ? (
                <p className="text-primary text-xl font-bold">
                  ${offerPrice}{" "}
                  <span className="text-accent text-base line-through">
                    ${price}
                  </span>
                </p>
              ) : (
                <p className="text-primary"> ${price}</p>
              )}
            </div>
            <Divider />

            <div>
              <div className="overflow-x-auto">
                <table className="table w-1/3">
                  <tbody>
                    {/* row */}
                    <tr>
                      <th>Product Code</th>
                      <td>{productCode}</td>
                    </tr>
                    <tr>
                      <th>Category</th>
                      <td>{category}</td>
                    </tr>
                    <tr>
                      <th>Quality</th>
                      <td className="text-primary font-bold">{quality}</td>
                    </tr>
                    <tr>
                      <th>Size</th>
                      <td>{size}</td>
                    </tr>

                    <tr>
                      <th>Pages</th>
                      <td>{pages}</td>
                    </tr>
                    <tr>
                      <th>GSM</th>
                      <td>{gsm}</td>
                    </tr>
                    <tr>
                      <th>Stock</th>
                      <td>{stock}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <Divider />

              <div className="mt-6 flex items-center gap-4">
                {/* <form
                  onSubmit={(e) => handleAddToCart(e, singleProduct)}
                  className="flex items-center gap-4 mb-4"
                >
                  <div className="relative w-24">
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
                  <input
                    className="py-2 px-4 bg-primary text-white transition-colors duration-300 ease-in-out hover:bg-primary-content cursor-pointer"
                    type="submit"
                    value="Add to Cart"
                  />
                </form> */}

                {/* this part will be used in later */}
                {/* <button
                  onClick={() => handleAddToCart(singleProduct?._id)}
                  className="py-2 px-4 bg-primary text-white transition-colors duration-300 ease-in-out hover:bg-primary-content cursor-pointer"
                >
                  Add to Cart
                </button>
                <button className="py-2 px-4 bg-primary text-white transition-colors duration-300 ease-in-out hover:bg-primary-content cursor-pointer flex items-center">
                  <FaRegHeart className="text-lg" />
                  Add to WishList
                </button> */}
                <div>
                  <h3>
                    অর্ডারের জন্য আমাদের{" "}
                    <a
                      href={`https://wa.me/8801306507274?text=${encoded}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary underline font-medium"
                    >
                      Whatsapp
                    </a>{" "}
                    নাম্বার অথবা{" "}
                    <a
                      href={`https://m.me/khatakunjobd?ref=${encoded}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary underline font-medium"
                    >
                      Facebook
                    </a>{" "}
                    পেজে ম্যাসেজ দিন।
                  </h3>
                  <div className="flex gap-4 mt-4">
                    <a
                      href={`https://m.me/khatakunjobd?ref=${encoded}`}
                      target="_blank"
                      rel="noreferrer"
                      className="order-2 flex items-center gap-2 border rounded-md px-4 py-2 bg-blue-500 text-white font-medium w-fit transition-all duration-300 ease-linear hover:bg-white hover:text-blue-500"
                    >
                      <FaFacebookF /> Facebook
                    </a>
                    <a
                      href={`https://wa.me/8801306507274?text=${encoded}`}
                      target="_blank"
                      rel="noreferrer"
                      className="order-1 flex items-center gap-2 border rounded-md px-4 py-2 bg-green-400 text-white font-medium w-fit transition-all duration-300 ease-linear hover:bg-white hover:text-green-500"
                    >
                      <FaWhatsapp /> Whatsapp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Tabs>
            <TabList className="flex justify-center gap-4 border border-primary/20 py-2 rounded-md">
              <Tab className="py-2 px-4 text-accent font-medium focus:outline-0 transition-colors duration-300 ease-linear hover:text-primary cursor-pointer">
                Description
              </Tab>
              <Tab className="py-2 px-4 text-accent font-medium focus:outline-0 transition-colors duration-300 ease-linear hover:text-primary cursor-pointer">
                Reviews
              </Tab>
            </TabList>

            <TabPanel>
              <div className="py-6">
                <p>{description}</p>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="py-6">
                <Link
                  to="/review"
                  className="text-sm transition-colors duration-300 ease-linear hover:text-primary flex items-center gap-1"
                >
                  <FaPen />
                  Write a review.
                </Link>
                <Divider />
                <p className="text text-primary border border-primary/30 w-fit p-3">
                  No Reviews Found
                </p>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </Container>
    </section>
  );
};

export default ProductDetails;
