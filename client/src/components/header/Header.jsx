import Styles from "./header.module.css";
import memories from "./../../assets/images/memories.png";

import { Link } from "react-scroll";
function Header() {
  return (
    <div className={Styles.container}>
      <div className={Styles.title}>Memories</div>
      <div className={Styles.image}>
        <img src={memories} alt="logo" />
      </div>
      <Link to="form">
        <div className={Styles.addPost}>+</div>
      </Link>
    </div>
  );
}

export default Header;
