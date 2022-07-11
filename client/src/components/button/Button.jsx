import Styles from "./button.module.css";

function Button({ btnText }) {
  return <div className={Styles.button}>{btnText}</div>;
}

export default Button;
