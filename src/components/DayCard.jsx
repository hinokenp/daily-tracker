import { useState } from "react";
import ModalMarksList from "./ModalMarksList";

function DayCard({ day, marks, currentYear, currentMonth }) {
  const [modalIsActive, setModalIsActive] = useState(false);

  function isToday() {
    return (
      new Date().getFullYear() === currentYear &&
      new Date().getMonth() === currentMonth &&
      new Date().getDate() === day.getDate()
    );
  }

  function handleModalDisplay(value) {
    setModalIsActive(!modalIsActive);
    console.log(modalIsActive);

    console.log("target: ", value);

    const testik = day.toISOString();
    console.log("iso: ", testik);
    console.log("day: ", day);
    console.log("date: ", new Date(testik));
  }

  return (
    <>
      <div className={`day-card ${isToday() ? "today" : ""}`}>
        {modalIsActive && (
          <ModalMarksList onClose={handleModalDisplay} day={day} />
        )}
        <div className="day-card__container" onClick={handleModalDisplay}>
          <p>{day.getDate()}</p>
          <div className="marks-list">
            {marks.map((mark) => {
              return mark.date.map((date) => {
                if (
                  new Date(date).getFullYear() === currentYear &&
                  new Date(date).getMonth() === currentMonth &&
                  new Date(date).getDate() === day.getDate()
                ) {
                  return (
                    <div
                      key={date}
                      className="mark"
                      style={{ backgroundColor: mark.color }}
                    ></div>
                  );
                }
              });
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default DayCard;
