import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import FAQ from "./FAQ";
import product from "./products/Product";

function Home() {
  const [productList, setproductList] = useState([]);

  useEffect(() => {
    setproductList(product);
  }, []);

  return (
    <div>
      {/* passing product in ProductCard  */}
      {productList.map((item) => {
        return (
          <ProductCard
            plan={item.plan}
            image={item.image}
            price={item.price}
            description={item.description}
          />
        );
      })}

      <FAQ />
    </div>
  );
}

export default Home;
