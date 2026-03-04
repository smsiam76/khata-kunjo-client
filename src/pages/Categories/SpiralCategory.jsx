import React, { use } from "react";
import Loader from "../../components/Shared/Loader/Loader";
import ProductCard from "../../components/Shared/Card/ProductCard";
import Container from "../../components/Shared/Container/Container";
import Divider from "../../components/Shared/Box/Divider";

const productsPromise = fetch("http://localhost:5000/products").then((res) =>
  res.json(),
);
const SpiralCategory = () => {
  const productsAll = use(productsPromise);
  //const [spiralCategory, setSpiralCategory] = useState([]);

  const products = productsAll?.filter(product => product.category === "Spiral");
  
 // console.log(products);
  

 // console.log(products);

  return (
    <section className="my-16">
      <Container>
        <div className="mb-8">
          <h4 className="text-2xl font-bold">Spiral Khata</h4>
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

export default SpiralCategory;
