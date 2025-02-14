import { useEffect } from "react";
import { useState } from "react";
import DayCard from "./components/DayCard";
import Sidebar from "./components/Sidebar";

const MONTHS = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Отябрь",
  "Ноябрь",
  "Декабрь",
];

function App() {
  const marks = [
    {
      title: "Тест 1",
      color: "#CD4C4C",
      date: ["2025-01-11T10:00:00.000Z", "2025-01-12T12:30:45.123Z"],
    },
    {
      title: "Тест 2",
      color: "#6753D7",
      date: [
        "2025-01-08T10:00:00.000Z",
        "2025-01-11T12:30:45.123Z",
        "2025-01-11T12:30:45.123Z",
        "2025-01-11T12:30:45.123Z",
        "2025-01-11T12:30:45.123Z",
        "2025-01-11T12:30:45.123Z",
        "2025-02-11T12:30:45.123Z",
        "2026-01-08T10:00:00.000Z",
      ],
    },
  ];

  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [dayList, setDayList] = useState([]);

  useEffect(() => {
    setDayList(renderDays(currentYear, currentMonth));
  }, []);

  function getDaysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
  }

  function renderDays(year, month) {
    const DaysInMonth = getDaysInMonth(year, month);

    const dayList = [];

    for (let day = 1; day <= DaysInMonth; day++) {
      dayList.push(new Date(year, month, day));
    }

    return dayList;
  }

  function handleMonthPrev() {
    let newYear = currentYear;
    let newMonth = currentMonth - 1;

    if (newMonth < 0) {
      newMonth = 11;
      newYear -= 1;
    }

    setCurrentMonth(newMonth);
    setCurrentYear(newYear);
    setDayList(renderDays(newYear, newMonth));
  }

  function handleMonthNext() {
    let newYear = currentYear;
    let newMonth = currentMonth + 1;

    if (newMonth > 11) {
      newMonth = 0;
      newYear += 1;
    }

    setCurrentMonth(newMonth);
    setCurrentYear(newYear);
    setDayList(renderDays(newYear, newMonth));
  }

  function handleYearPrev() {
    let newYear = currentYear - 1;
    let newMonth = currentMonth;

    setCurrentMonth(newMonth);
    setCurrentYear(newYear);
    setDayList(renderDays(newYear, newMonth));
  }

  function handleYearNext() {
    let newYear = currentYear + 1;
    let newMonth = currentMonth;

    setCurrentMonth(newMonth);
    setCurrentYear(newYear);
    setDayList(renderDays(newYear, newMonth));
  }

  return (
    <>
      <main className="main">
        <Sidebar marks={marks} />
        <div className="content">
          <div className="time-block">
            <div className="date">
              <span className="date__btn" onClick={handleYearPrev}>
                {currentYear - 1}
              </span>
              {currentYear}
              <span className="date__btn" onClick={handleYearNext}>
                {currentYear + 1}
              </span>
            </div>
            <div className="date">
              <span className="date__btn" onClick={handleMonthPrev}>
                {MONTHS[currentMonth === 0 ? 11 : currentMonth - 1]}
              </span>
              <p>{MONTHS[currentMonth]}</p>
              <span className="date__btn" onClick={handleMonthNext}>
                {MONTHS[currentMonth === 11 ? 0 : currentMonth + 1]}
              </span>
            </div>
          </div>
          <div className="days-list">
            {dayList.map((day) => (
              <DayCard
                key={day}
                day={day}
                marks={marks}
                currentYear={currentYear}
                currentMonth={currentMonth}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

// new Date(date).getDate() === day ? <p>{mark.title}</p> : null;

export default App;
