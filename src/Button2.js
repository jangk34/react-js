import PropTypes from "prop-types";
import styles from "./Button2.moudule.css";

function Button2({ text }) {
  return <button className={styles.btn2}>{text}</button>;
}

Button2.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button2;
