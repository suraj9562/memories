import Styles from "./post.module.css";
import likeIcon from "./../../../assets/images/like.png";
import deleteIcon from "./../../../assets/images/delete.png";
import menuIcon from "./../../../assets/images/menu.svg";
import moment from "moment";
import { useDispatch } from "react-redux";
import {
  deletePostAction,
  likePostAction,
} from "../../../actions/postsActions";
import { Link } from "react-scroll";

function Post({ post, setSelectedId }) {
  const dispatch = useDispatch();

  const clickDelete = (id) => {
    dispatch(deletePostAction(id));
  };

  const likePost = (id) => {
    dispatch(likePostAction(id));
  };

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

          <Link to="form">
            <img
              src={menuIcon}
              alt="menu"
              onClick={() => {
                setSelectedId(post._id);
              }}
            />
          </Link>
        </div>
      </div>
      <div className={Styles.content}>
        <div className={Styles.tagPill}>
          {post.tags && post.tags.map((tag, i) => <span key={i}>{tag}</span>)}
        </div>
        <div className={Styles.title}>{post.title}</div>
        <div className={Styles.desc}>{post.message}</div>
        <div className={Styles.cardFooter}>
          <div
            className={Styles.like}
            onClick={() => {
              likePost(post._id);
            }}
          >
            <img src={likeIcon} alt="like" />
            <span>{post.likeCount}</span>
          </div>
          <div
            className={Styles.delete}
            onClick={() => {
              clickDelete(post._id);
            }}
          >
            <img src={deleteIcon} alt="delete" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
