import Form from "../components/form/Form";
import Header from "../components/header/Header";
import Posts from "../components/posts/Posts";

import Styles from "./landingPage.module.css";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getPostsAction } from "../actions/postsActions";

function LandingPage() {
  const dispatch = useDispatch();
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    dispatch(getPostsAction());
  }, [selectedId, dispatch]);

  return (
    <div className={Styles.container}>
      <Header />
      <div className={Styles.grid}>
        <div className={Styles.posts}>
          <Posts setSelectedId={setSelectedId} />
        </div>
        <div className={Styles.form}>
          <Form selectedId={selectedId} setSelectedId={setSelectedId} />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
