import Nevbar from "../components/Nevbar/nevbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Nevbar />
      <Component {...pageProps} />;
    </div>
  );
}

export default MyApp;
