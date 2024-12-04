import { useState } from "react";

export function Item({ emoji }) {
  const [zoomed, setZoomed] = useState(false);

  return (
    <li className="item">
      <span className="emoji">{emoji}</span>
      <button
        className="btn"
        onClick={() => {
          setZoomed((wasZoomed) => !wasZoomed);
        }}
      >
        {zoomed ? "Zoom Out" : "Zoom In"}
      </button>
    </li>
  );
}
