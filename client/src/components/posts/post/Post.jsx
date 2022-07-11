import Styles from "./post.module.css";
import likeIcon from "./../../../assets/images/like.png";
import deleteIcon from "./../../../assets/images/delete.png";
import menuIcon from "./../../../assets/images/menu.svg";

function Post() {
  return (
    <div className={Styles.card}>
      <div className={Styles.image}>
        <img
          src="https://www.freecodecamp.org/news/content/images/2020/05/feature.jpg"
          alt="img"
        />
        <div className={Styles.overlay}>
          <div className={Styles.titleContainer}>
            <div className={Styles.title}>Pune</div>
            <div className={Styles.subtitle}>2 Months Ago</div>
          </div>

          <img src={menuIcon} alt="menu" />
        </div>
      </div>
      <div className={Styles.content}>
        <div className={Styles.tagPill}>
          <span>abc</span>
        </div>
        <div className={Styles.title}>Lorem ipsum dolor sit amet.</div>
        <div className={Styles.desc}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
          beatae voluptatem asperiores impedit culpa ratione, eaque itaque
          molestias dolorum tempora!
        </div>
        <div className={Styles.cardFooter}>
          <div className={Styles.like}>
            <img src={likeIcon} alt="like" />
          </div>
          <div className={Styles.delete}>
            <img src={deleteIcon} alt="like" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
