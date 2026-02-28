import React, { Suspense, use } from "react";
import Banner from "../../components/Banner/Banner";
import ProductCard from "../../components/Shared/Card/ProductCard";
import FeatureProduct from "./FeatureProduct/FeatureProduct";

const produtPromise = fetch("http://localhost:5000/products").then((res) => res.json());
const Home = () => {
  const data = use(produtPromise);
  console.log(data);

  return (
    <>
      <Banner />
      <Suspense fallback={"Loading"}>
        <FeatureProduct data={data} />
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
