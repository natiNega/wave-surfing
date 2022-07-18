// import Link from "next/link";
import { useEffect, useState } from "react";
import Product from "../product/Product";

function Equipment() {
  const [equipment, setequipment] = useState([]);

  useEffect(() => {
    fetch("/api/surfing_equipment")
      .then((res) => res.json())
      .then((equipment) => setequipment(equipment));
  }, []);

  return (
    <section className="Products">
      {equipment?.map((equipment) => {
        return (
          <Product
            key={equipment.id}
            id={equipment.id}
            numitem={equipment.numitem}
            name={equipment.title}
            category={equipment.category}
            description={equipment.description}
            price={equipment.price}
            image={equipment.image}
          />
        );
      })}
    </section>
  );
}

export default Equipment;
