import { useState } from "react";

function Mark({ title, color = null }) {
  const [inputColor, setInputColor] = useState(color);

  return (
    <div className="mark">
      <div
        className="color-picker-wrapper"
        style={{ backgroundColor: inputColor }}
      >
        <input
          type="color"
          value={inputColor}
          onChange={(e) => setInputColor(e.target.value)}
        />
        {/* Add label? */}
      </div>
      <p>{title}</p>
    </div>
  );
}

export default Mark;
