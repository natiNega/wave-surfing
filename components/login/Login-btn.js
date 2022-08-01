import { useSession, signIn, signOut } from "next-auth/react";
import styles from "./Login.module.css";
import { SocialIcon } from 'react-social-icons';
// import Image from "next/image";
export default function Login() {
  const { data: session } = useSession();
  // console.log("session", session);
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
     
      <div className={styles.Logo}>
        <SocialIcon onClick={() => signIn("Google")} url="https://google.com/in/jaketrent" style={{ height: 28, width: 28 , margin: 5 }} />
         <SocialIcon onClick={() => signIn("github")} url="https://github.com/in/jaketrent" style={{ height: 28, width: 28,margin: 5 }} />
         <SocialIcon onClick={() => signIn("facebook")} url="https://facebook.com/in/jaketrent" style={{ height: 28, width: 28,margin: 5 }} />
      </div>
    </>
  );
}
