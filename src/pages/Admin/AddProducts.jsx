import React, { use, useContext } from "react";
import InputField from "../../components/Shared/Input/InputField";
import Button from "../../components/Shared/Button/Button";
import Divider from "../../components/Shared/Box/Divider";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

const AddProducts = () => {

  const navigate = useNavigate();
  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    data.gallery = [data.thumbnail, ...data.gallery.split(",").map(res => res.trim())];
    data.rating = 0;

    // extra info
    // const productCode = `KK-${data.category}.slice(0,3)-`
    axios
      .post("http://localhost:5000/products", data)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            title: `${data.title} Successfully added!`,
            icon: "success",
            draggable: true,
          });
          navigate("/products");
        }
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(data);
  };
  return (
    <section className="my-16">
      <div className="max-w-10/12 mx-auto">
        <h4 className="text-2xl font-bold">Add Products</h4>
        <Divider></Divider>
        <form onSubmit={handleAddProduct} className="space-y-4">
          {/* title */}
          <div className="">
            <label className="block mb-2 font-medium text-accent text-sm pl-2">
              Title
            </label>
            <InputField
              className=""
              placeholder="Title"
              type="text"
              name="title"
            ></InputField>
          </div>
          {/* brand category status */}
          <div className="grid gap-8 grid-cols-1 md:grid-cols-4">
            <div className="">
              <label className="block mb-2 font-medium text-accent text-sm pl-2">
                Brand
              </label>
              <InputField
                className=""
                placeholder="Brand"
                type="text"
                name="brand"
              ></InputField>
            </div>
            <div className="">
              <label className="block mb-2 font-medium text-accent text-sm pl-2">
                Select Category
              </label>
              <select
                defaultValue="Select Category"
                name="category"
                className="border border-primary/50 outline-0 rounded-md w-full px-4 py-2 md:px-6 md:py-3 "
              >
                <option disabled={true}>Select Quality</option>
                <option value="Spiral">Spiral</option>
                <option value="Binding">Binding</option>
              </select>
            </div>
            <div className="">
              <label className="block mb-2 font-medium text-accent text-sm pl-2">
                Select Quality
              </label>
              <select
                defaultValue="Select Quality"
                name="quality"
                className="border border-primary/50 outline-0 rounded-md w-full px-4 py-2 md:px-6 md:py-3 "
              >
                <option disabled={true}>Select Quality</option>
                <option value="Premium">Premium</option>
                <option value="Essential">Essential</option>
                <option valeu="Good">Good</option>
              </select>
            </div>
            <div className="">
              <label className="block mb-2 font-medium text-accent text-sm pl-2">
                Status
              </label>
              <select
                defaultValue="Select Status"
                name="status"
                className="border border-primary/50 outline-0 rounded-md w-full px-4 py-2 md:px-6 md:py-3 "
              >
                <option disabled={true}>Select Quality</option>
                <option value="active">Acitive</option>
                <option value="disabled">Disabled</option>
              </select>
            </div>
          </div>

          {/* thumbnail url */}
          <div className="">
            <label className="block mb-2 font-medium text-accent text-sm pl-2">
              Thumbnail
            </label>
            <InputField
              className=""
              placeholder="Thumbnail"
              type="url"
              name="thumbnail"
            ></InputField>
          </div>
          {/* details image url array*/}
          <div className="">
            <label className="block mb-2 font-medium text-accent text-sm pl-2">
              Gallery Images
            </label>
            <InputField
              className=""
              placeholder="Gallery Images (please used comma to separate as array)"
              type="text"
              name="gallery"
            ></InputField>
          </div>

          {/* price offer-price pages size */}
          <div className="grid gap-8 grid-cols-2 md:grid-cols-4">
            <div className="">
              <label className="block mb-2 font-medium text-accent text-sm pl-2">
                Size
              </label>
              <InputField
                className=""
                placeholder="Size"
                type="text"
                name="size"
              ></InputField>
            </div>
            <div className="">
              <label className="block mb-2 font-medium text-accent text-sm pl-2">
                Page Number
              </label>
              <InputField
                className=""
                placeholder="Pages Number"
                type="text"
                name="pagesNo"
              ></InputField>
            </div>
            <div className="">
              <label className="block mb-2 font-medium text-accent text-sm pl-2">
                Page Type
              </label>
              <InputField
                className=""
                placeholder="Pages Type"
                type="text"
                name="pagesType"
              ></InputField>
            </div>
            <div className="">
              <label className="block mb-2 font-medium text-accent text-sm pl-2">
                GSM
              </label>
              <InputField
                className=""
                placeholder="GSM"
                type="text"
                name="gsm"
              ></InputField>
            </div>
          </div>

          {/* stock sold ratings status */}
          <div className="grid gap-8 grid-cols-2 md:grid-cols-5">
            <div className="">
              <label className="block mb-2 font-medium text-accent text-sm pl-2">
                Price
              </label>
              <InputField
                className=""
                placeholder="Price"
                type="text"
                name="price"
              ></InputField>
            </div>
            <div className="">
              <label className="block mb-2 font-medium text-accent text-sm pl-2">
                Offer Price
              </label>
              <InputField
                className=""
                placeholder="Offer Price"
                type="text"
                name="offerPrice"
              ></InputField>
            </div>
            <div className="">
              <label className="block mb-2 font-medium text-accent text-sm pl-2">
                In Stock
              </label>
              <InputField
                className=""
                placeholder="In Stock"
                type="text"
                name="inStock"
              ></InputField>
            </div>
            <div className="">
              <label className="block mb-2 font-medium text-accent text-sm pl-2">
                Sold
              </label>
              <InputField
                className=""
                placeholder="Sold"
                type="text"
                name="sold"
              ></InputField>
            </div>
            <div className="">
              <label className="block mb-2 font-medium text-accent text-sm pl-2">
                Featured
              </label>
              <select
                defaultValue="true"
                name="featured"
                className="border border-primary/50 outline-0 rounded-md w-full px-4 py-2 md:px-6 md:py-3 "
              >
                <option disabled={true}>Featured</option>
                <option value="true">true</option>
                <option value="false">false</option>
              </select>
            </div>
          </div>
          <div className="">
            <label className="block mb-2 font-medium text-accent text-sm pl-2">
              Description{" "}
            </label>
            <textarea
              className="border border-primary/50 outline-0 rounded-md w-full px-4 py-2 md:px-6 md:py-3 "
              name="description"
              placeholder="Descriptioin"
            ></textarea>
          </div>
          <Button>Add</Button>
        </form>
      </div>
    </section>
  );
};

export default AddProducts;
