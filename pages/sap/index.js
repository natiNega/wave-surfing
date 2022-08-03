import Image from "next/image";
import Products from "../../components/Products/Products";
import { server } from '../../config'
// SSR - Server Side Rendering
export async function getServerSideProps() {
  const res = await fetch(`${server}/api/product/`);
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
  return (
    <div
      className="productImgBackg"
      style={{
        backgroundImage: `url('${"tatonomusic-FFCgotROOTY-unsplash (1).jpg"}')`,
        width: "100%",
        height: "100%",
      }}
    >
      <Products products={item} />
    </div>
  );
}

export default Sap;
