import styles from "./Display.module.css";

const Display = ({setvalue}) => {
  return <input className={styles.display} type="text" value={setvalue} readOnly />;
};

export default Display;
