import Mark from "./Mark";

function Sidebar({ marks }) {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <h1>Daily Tracker</h1>
        <button className="button">Создать отметку</button>
      </div>
      <div className="sidebar__content">
        {marks.map((mark) => {
          return (
            <Mark key={mark.title} title={mark.title} color={mark.color} />
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
