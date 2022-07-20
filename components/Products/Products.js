// import Link from "next/link";
import Product from "../product/Product";
import TemporaryDrawer from "../TemporaryDrawer/TemporaryDrawer";

function Products({ products }) {
  return (
    <section className="products">
      {products?.map((product) => {
        return (
          <Product
            {...product}
            key={product._id}
            id={product._id}
            numitem={product.numitem}
            title={product.title}
            category={product.category}
            description={product.description}
            price={product.price}
            image={product.image}
            quntity={product.quntity}
          />
        );
      })}
    </section>
  );
}

export default Products;
