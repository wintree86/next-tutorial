import Link from "next/link";
import styles from "./header.scss";

const Header = () => {
  return (<div className={styles.headerWrapper}>
    <Link prefetch href="/"><a>Home</a></Link>
    <Link href="/about"><a>About</a></Link>
  </div>);
};

export default Header;
