import { useState, useId, useEffect } from "react";
import styles from "./InputColor.module.scss";
import { AppContext } from "../../../context";
import { useContext } from "react";

function InputColor({
  mark,
  color = "#ffffff",
  onChangeColor,
  disabled = false,
}) {
  const [inputColor, setInputColor] = useState(color);
  const id = useId();

  const { setMarks } = useContext(AppContext);

  function handleChange(value) {
    if (typeof onChangeColor === "function") {
      onChangeColor(value);
    }

    setInputColor(value);
  }

  useEffect(() => {
    if (mark) {
      setMarks((prevMarks) =>
        prevMarks.map((item) =>
          Number(item.id) === Number(mark.id)
            ? { ...item, color: inputColor }
            : item
        )
      );
    }
  }, [inputColor]);

  return (
    <div>
      <label
        className={styles.colorPickerWrapper}
        style={{ backgroundColor: inputColor }}
        htmlFor={id}
      >
        <input
          type="color"
          id={id}
          value={inputColor}
          onChange={(e) => handleChange(e.target.value)}
          disabled={disabled}
        />
      </label>
    </div>
  );
}

export default InputColor;
