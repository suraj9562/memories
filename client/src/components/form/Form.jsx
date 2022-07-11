import Button from "../button/Button";
import Styles from "./form.module.css";

function Form() {
  return (
    <div className={Styles.container}>
      <div className={Styles.title}>Add a Memory</div>
      <form>
        <input
          className={Styles.inputDecoration}
          type="text"
          placeholder="Contributor"
        />
        <input
          className={Styles.inputDecoration}
          type="text"
          placeholder="Title"
        />
        <textarea
          className={Styles.inputDecoration}
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Message"
        ></textarea>
        <input
          className={Styles.inputDecoration}
          type="text"
          placeholder="Tags (Comma separated)"
        />
        <input type="file" className="" id="" />
        <Button btnText="Submit" />
        <Button btnText="Clear" />
      </form>
    </div> 
  );
}

export default Form;
