import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/nevbar.module.css";
import TemporaryDrawer from "../TemporaryDrawer/TemporaryDrawer";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import Login from "../login/Login-btn";
import VideoPlayer from "../Media-player/MediaPlayer";
import { Homebuttens } from "../button/Homebuttens";

function Nevbar() {
  return (
    <nav className={styles.nevbar}>
      <div
        className={styles.Link}
        style={{
          backgroundImage: `url('${"ץwoman-surfing-wave_s.jpg"}')`,
          height: 1550,
        }}
      >
        <Link href="/">
          <HomeRoundedIcon
            className={styles.home_but}
            sx={{ color: "black" }}
          />
        </Link>
        {/* <span className="material-icons-outlined">surfing</span> */}
        {/* <Image src="/woman-surfing-wave_s.webp" height={500} width={5000} alt=""/> */}
        {/* <Link href="/cart">Cart</Link> */}
        {/* <Link href="/Surfboards" >Surf Boards</Link> */}
        {/* <Link href="/private_lessons">Private Lessons</Link> */}
        <Login />
        <TemporaryDrawer />

        <div>
          <VideoPlayer />
        </div>
        <Homebuttens />
      </div>
    </nav>
  );
}

export default Nevbar;
