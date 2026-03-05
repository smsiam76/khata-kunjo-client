import React, { Suspense, use } from "react";
import Banner from "../../components/Banner/Banner";
import ProductCard from "../../components/Shared/Card/ProductCard";
import FeatureProduct from "./FeatureProduct/FeatureProduct";
import Loader from "../../components/Shared/Loader/Loader";

const produtPromise = fetch("http://localhost:5000/products").then((res) => res.json());
const Home = () => {
  const products = use(produtPromise);
 // console.log(products);

  return (
    <>
      <Banner />
      <Suspense fallback={<Loader></Loader>}>
        <FeatureProduct products={products} />
      </Suspense>
      {/* <div className="grid grid-cols-5 gap-10">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        
      </div> */}
    </>
  );
};

export default Home;
