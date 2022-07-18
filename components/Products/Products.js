import Link from "next/link";
import { useEffect, useState } from "react";
import Product from "../product/Product";
import TemporaryDrawer from "../TemporaryDrawer/TemporaryDrawer";


function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/product")
      .then((res) => res.json())
      .then((products) => setProducts(products));
  }, []);

  return (
    <section className="products">
      {products?.map((product,TemporaryDrawer) => {
        return (
          <>
          <Product
            key={product.id }
            id={product.id}
            numitem={product.numitem}
            title={product.title}
            category={product.category}
            description={product.description}
            price={product.price}
            image={product.image}
            quntity={product.quntity}
          />

          </>
        );
      })}
    </section>
  );
}

export default Products;
