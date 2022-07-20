import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/nevbar.module.css";
import TemporaryDrawer from "../TemporaryDrawer/TemporaryDrawer";

function Nevbar() {
  return (
    <nav className={styles.nevbar}>
      <div className={styles.Link}>
        {/* <span className="material-icons-outlined">surfing</span> */}
        <Link href="/">Home</Link>
        {/* <Link href="/cart">Cart</Link> */}
        <Link href="/sap">Sap</Link>
        <Link href="/private_lessons">Private Lessons</Link>
        <TemporaryDrawer />
      </div>
    </nav>
  );
}

export default Nevbar;
