import React, { use } from "react";
import Container from "../../components/Shared/Container/Container";
import Divider from "../../components/Shared/Box/Divider";
import ProductCard from "../../components/Shared/Card/ProductCard";
import { useLoaderData } from "react-router";



const SelaiCategtory = () => {
  const productsAll = useLoaderData();


  const products = productsAll?.filter(
    (product) => product.category === "Binding",
  );
  return (
    <section className="my-16">
      <Container>
        <div className="mb-8">
          <h4 className="text-2xl font-bold">Binding Khata</h4>
          <Divider></Divider>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8">
          {products.map((product) => (
            <ProductCard
              key={product._id}
              products={products}
              product={product}
            ></ProductCard>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default SelaiCategtory;
