import { useState } from "react";

function DayCard({ day, marks, currentYear, currentMonth }) {
  return (
    <div className="day-card">
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
  );
}

export default DayCard;
