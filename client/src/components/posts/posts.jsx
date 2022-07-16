import Post from "./post/Post";
import Styles from "./posts.module.css";

import { useSelector } from "react-redux";

function Posts({ setSelectedId }) {
  const posts = useSelector((state) => state.posts.posts);
  // console.log(posts.posts);

  return (
    <div className={Styles.container}>
      <div className={Styles.cardContainer}> 
        {posts &&
          posts.map((post) => (
            <Post key={post._id} post={post} setSelectedId={setSelectedId} />
          ))}
      </div>
    </div>
  );
}

export default Posts;
