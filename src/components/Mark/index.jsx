import InputColor from "../ui/InputColor";
import styles from "./Mark.module.scss";

function Mark({ mark, title, color, inputIsDisabled, onAddDateToMark }) {
  return (
    <div className={styles.mark} onClick={onAddDateToMark}>
      <InputColor disabled={inputIsDisabled} color={color} mark={mark} />
      <p>{title}</p>
    </div>
  );
}

export default Mark;
