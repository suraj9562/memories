import Styles from "./header.module.css"
import memories from "./../../assets/images/memories.png"
function Header() {
  return (
    <div className={Styles.container}>
      <div className={Styles.title}>
        Memories
      </div>
      <div className={Styles.image}>
        <img src={memories} alt="logo" />
      </div>
    </div>
  )
}

export default Header
