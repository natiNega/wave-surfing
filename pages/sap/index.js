import Products from "../../components/Products/Products";
// SSR - Server Side Rendering
export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/product/");
  const products = await res.json();
  const item = products.map((p) => ({
    ...p,
    quntity: 0,
  }));

  return {
    props: {
      item,
    }, // will be passed to the page component as props
  };
}

function Sap({ item }) {
  return <Products products={item} />;
}

export default Sap;
