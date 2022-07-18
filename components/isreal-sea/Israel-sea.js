import { useEffect, useState } from "react";
import Product from "../product/Product";
function IsrealSea() {
    const [IsraelSeas, setIsraelSeas] = useState([]);
    // import Product from "../product/Product";
  
    useEffect(() => {
      fetch("/api/isreal sea condtion")
        .then((res) => res.json())
        .then((IsraelSeas) => setIsraelSeas(IsraelSeas));
    }, []);
    
  return (
    <section className="products">
      {IsraelSeas?.map((product) => {
        return (
          <Product
            key={product.id}
            id={product.id}
            numitem={product.numitem}
            title={product.name}
            category={product.category}
            description={product.description}
            price={product.price}
            image={product.image}
          />
        );
      })}
    </section>
  );
}

    export default IsrealSea;