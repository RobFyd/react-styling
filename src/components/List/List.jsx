import { Item } from "../Item/Item";
import styles from "./List.module.css";
import styled from "styled-components";

const emojis = ["🚀", "🎶", "🎁", "🎉", "✨"];

const Button = styled.button`
  background-color: #f1356d;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  cursor: pointer;
`;

export function List() {
  return (
    <>
      <Button>Test</Button>
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
