import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/nevbar.module.css";
import TemporaryDrawer from "../TemporaryDrawer/TemporaryDrawer";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import Login from "../login/login-btn";


function Nevbar() {
  return (
    <nav className={styles.nevbar}>
      <div className={styles.Link} >
        {/* <span className="material-icons-outlined">surfing</span> */}
        <Link  href="/" ><HomeRoundedIcon  sx={{color:"black" }} /></Link>
        
        {/* <Link href="/cart">Cart</Link> */}
        <Link href="/Surfboards" >Surf Boards</Link>
        <Link href="/private_lessons">Private Lessons</Link>
        <Login />
        <TemporaryDrawer />
      </div>
    </nav>
  );
}

export default Nevbar;
