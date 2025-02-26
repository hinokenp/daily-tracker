import Mark from "./Mark";
import { AppContext } from "../context";
import { useContext } from "react";

function ModalMarksList({ day, onClose }) {
  const { marks } = useContext(AppContext);

  function handleAddDateToMark(mark) {
    mark.date.push(day.toISOString());
    console.log(mark.date);
    console.log(marks);
    onClose();
  }

  return (
    <div className="modal-marks">
      <button className="modal-marks__btn-close" onClick={onClose}>
        X
      </button>
      <div className="modal-marks__content">
        {marks.map((mark) => {
          return (
            <Mark
              onAddDateToMark={() => handleAddDateToMark(mark)}
              key={mark.title}
              title={mark.title}
              color={mark.color}
              inputIsDisabled={true}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ModalMarksList;
