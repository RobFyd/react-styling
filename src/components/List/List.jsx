import { Item } from "../Item/Item";
import styles from "./List.module.css";

const emojis = ["🚀", "🎶", "🎁", "🎉", "✨"];

export function List() {
  return (
    <>
      <button
        className={styles.btn}
        onClick={() => alert(`Number of emoji: ${emojis.length}`)}
      >
        Number of emoji
      </button>
      <ul className={styles.list}>
        {emojis.map((emoji) => (
          <Item key={emoji} emoji={emoji} />
        ))}
      </ul>
    </>
  );
}
