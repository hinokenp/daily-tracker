import Mark from "./Mark";
import InputColor from "./ui/InputColor";
import { AppContext } from "../context";
import { useContext, useState } from "react";

function Sidebar() {
  const [inputColor, setInputColor] = useState("");
  const [inputMarkTitle, setInputMarkTitle] = useState("");
  const { marks, handleCreateMark } = useContext(AppContext);

  function handleChangeForm() {
    handleCreateMark(inputMarkTitle, inputColor);
    setInputMarkTitle("");
  }

  function handleChangeColor(color) {
    setInputColor(color);
  }

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div>
          <h1>Daily Tracker</h1>
        </div>
        <div className="sidebar__form">
          <div className="sidebar__form-input">
            <input
              type="text"
              name=""
              id=""
              value={inputMarkTitle}
              onChange={(e) => setInputMarkTitle(e.target.value)}
            />
            <InputColor onChangeColor={handleChangeColor} />
          </div>
          <button className="button" onClick={() => handleChangeForm()}>
            Создать отметку
          </button>
        </div>
      </div>
      <div className="sidebar__content">
        {marks.map((mark) => {
          return (
            <Mark
              mark={mark}
              key={mark.title}
              title={mark.title}
              color={mark.color}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
