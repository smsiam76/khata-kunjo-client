import React, { Suspense, use } from "react";
import Container from "../../components/Shared/Container/Container";
import ProductCard from "../../components/Shared/Card/ProductCard";
import Divider from "../../components/Shared/Box/Divider";

const productsPromise = fetch("http://localhost:5000/products").then((res) =>
  res.json(),
);
const Products = () => {
  const products = use(productsPromise);
  console.log(products);

  return (
    <section className="my-12">
      <Container>
        <div>
          <div className="mb-8">
            <h4 className="text-2xl font-bold">All Khata</h4>
            <Divider></Divider>
          </div>
        </div>
        <Suspense fallback={"Loader"}>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8">
            {products?.map((product) => (
              <ProductCard
                key={product._id}
                products={products}
                product={product}
              ></ProductCard>
            ))}
          </div>
        </Suspense>
      </Container>
    </section>
  );
};

export default Products;
