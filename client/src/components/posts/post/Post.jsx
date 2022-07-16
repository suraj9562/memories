import Styles from "./post.module.css";
import likeIcon from "./../../../assets/images/like.png";
import deleteIcon from "./../../../assets/images/delete.png";
import menuIcon from "./../../../assets/images/menu.svg";
import moment from "moment";

function Post({ post, setSelectedId }) {
  return (
    <div className={Styles.card}>
      <div className={Styles.image}>
        <img src={post.selectedFile.url} alt="img" />
        <div className={Styles.overlay}>
          <div className={Styles.titleContainer}>
            <div className={Styles.title}>{post.creator}</div>
            <div className={Styles.subtitle}>
              {moment(post.createdAt).fromNow()}
            </div>
          </div>

          <img
            src={menuIcon}
            alt="menu"
            onClick={() => {
              setSelectedId(post._id);
            }}
          />
        </div>
      </div>
      <div className={Styles.content}>
        <div className={Styles.tagPill}>
          {post.tags && post.tags.map((tag, i) => <span key={i}>{tag}</span>)}
        </div>
        <div className={Styles.title}>{post.title}</div>
        <div className={Styles.desc}>{post.message}</div>
        <div className={Styles.cardFooter}>
          <div className={Styles.like}>
            <img src={likeIcon} alt="like" />
            <span>{post.likeCount}</span>
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
