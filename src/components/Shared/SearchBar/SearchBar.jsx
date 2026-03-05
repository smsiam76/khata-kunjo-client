import React, { useState, useEffect } from "react";
import InputField from "../Input/InputField";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router";

const SearchBar = () => {
  const [productsData, setProductsData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);


  // Fetch products from API
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        setProductsData(data);
        setFilteredProducts(data);
      })
      .catch((err) => console.error(err));
  }, []);

  // Handle search input
  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = productsData.filter(
      (product) =>
        product.title.toLowerCase().includes(term) ||
        product.category.toLowerCase().includes(term) ||
        product.productCode.toLowerCase().includes(term),
    );

    setFilteredProducts(filtered);
  };

  return (
    <div className="relative">
      {/* Search Input */}
      <div className="relative w-full">
        <InputField
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search Here"
          className="w-full"
        />

        <button className="text-white absolute right-0 top-1/2 -translate-y-1/2 border border-primary p-4 bg-primary rounded-r-md cursor-pointer hover:bg-[#e3790e] transition-colors ease-in-out duration-300">
          <FaSearch />
        </button>
      </div>

      {/* Search Results */}
      {searchTerm && (
        <div className="absolute top-14 z-50 bg-white w-full border border-primary rounded shadow max-h-96 overflow-y-auto">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Link
                key={product.id}
                to={`/products/${product._id}`} // Use correct route
                onClick={() => {
                  setFilteredProducts([]); // Clear search results dropdown
                  setSearchTerm(""); // Clear the input field
                }}
              >
                <div className="border-b border-primary/30 p-2 flex items-center gap-2 hover:bg-primary/10 transition-colors">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <h3 className="font-semibold">{product.title}</h3>
                    <p className="text-xs">Code: {product.productCode}</p>
                    <p className="text-xs">Price: ৳{product.offerPrice}</p>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p className="p-2 text-sm">Not Found</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
