import { useState } from "react";

export function Item({ emoji }) {
  const [zoomed, setZoomed] = useState(false);

  return (
    <li>
      <span>{emoji}</span>
      <button
        onClick={() => {
          setZoomed((wasZoomed) => !wasZoomed);
        }}
      >
        {zoomed ? "Zoom Out" : "Zoom In"}
      </button>
    </li>
  );
}
