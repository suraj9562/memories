import Post from "./post/Post";
import Styles from "./posts.module.css";

function Posts() {
  return (
    <div className={Styles.container}>
      <div className={Styles.cardContainer}>
        <Post />
        <Post />
      </div>
    </div>
  );
}

export default Posts;
