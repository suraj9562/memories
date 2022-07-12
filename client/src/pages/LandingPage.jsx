import Form from "../components/form/Form";
import Header from "../components/header/Header";
import Posts from "../components/posts/Posts";

import Styles from "./landingPage.module.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPostsAction } from "../actions/postsActions";

function LandingPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostsAction());
  }, [dispatch]);

  return (
    <div className={Styles.container}>
      <Header />
      <div className={Styles.grid}>
        <div className={Styles.posts}>
          <Posts />
        </div>
        <div className={Styles.form}>
          <Form />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
