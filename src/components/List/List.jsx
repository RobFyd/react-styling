import { Item } from "../Item/Item";
import "./List.css";

const emojis = ["🚀", "🎶", "🎁", "🎉", "✨"];

export function List() {
  return (
    <>
      <button
        className="btn"
        onClick={() => alert(`Number of emoji: ${emojis.length}`)}
      >
        Number of emoji
      </button>
      <ul className="list">
        {emojis.map((emoji) => (
          <Item key={emoji} emoji={emoji} />
        ))}
      </ul>
    </>
  );
}
