import Button from "../button/Button";
import Styles from "./form.module.css";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createPostAction,
  deletePostAction,
  getPostAction,
  updatePostAction,
} from "../../actions/postsActions";
import { fetchAllProduct } from "../../api";

function Form({ selectedId, setSelectedId }) {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.posts.fetchedPost);

  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  const [selectedFile, setSelectedFile] = useState("");
  const [isUpdated, setIsUpdated] = useState(false);

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
    setSelectedFile(e.target.value);
  };

  const handleChange = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPostData({ ...postData, selectedFile: reader.result });
    };
  };

  const handleSubmit = () => {
    console.log(postData);
    if (selectedId) {
      if (!isUpdated) {
        const tagsString = postData.tags.join(",");
        postData["tags"] = tagsString;
      }

      dispatch(updatePostAction(selectedId, postData));
    } else {
      dispatch(createPostAction(postData));
    }

    setToNull();
  };

  const setToNull = () => {
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });

    setSelectedFile("");
    setSelectedId(null);
    setIsUpdated(false);
  };

  useEffect(() => {
    dispatch(getPostAction(selectedId));
  }, [selectedId, dispatch]);

  useEffect(() => {
    if (post) {
      setPostData(post);
    }
  }, [post]);

  return (
    <div className={Styles.container}>
      <div className={Styles.title}>
        {" "}
        {selectedId ? "Update" : "Add"} a Memory
      </div>
      <form>
        <input
          name="creator"
          value={postData.creator}
          className={Styles.inputDecoration}
          type="text"
          placeholder="Contributor"
          onChange={handleChange}
        />
        <input
          className={Styles.inputDecoration}
          name="title"
          value={postData.title}
          type="text"
          placeholder="Title"
          onChange={handleChange}
        />
        <textarea
          className={Styles.inputDecoration}
          name="message"
          value={postData.message}
          cols="30"
          rows="10"
          placeholder="Message"
          onChange={handleChange}
        ></textarea>
        <input
          className={Styles.inputDecoration}
          name="tags"
          value={postData.tags}
          type="text"
          placeholder="Tags (Comma separated)"
          onChange={(e) => {
            handleChange(e);
            setIsUpdated(true);
          }}
        />
        <input
          type="file"
          value={selectedFile}
          name="selectedFile"
          onChange={handleFileInputChange}
        />
        <div onClick={handleSubmit}>
          <Button btnText="Submit" />
        </div>
        <div onClick={setToNull}>
          <Button btnText="Clear" />
        </div>
      </form>
    </div>
  );
}

export default Form;
