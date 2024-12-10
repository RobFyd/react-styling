import { Item } from "../Item/Item";
import styled from "styled-components";

const emojis = ["🚀", "🎶", "🎁", "🎉", "✨"];

const StyledButton = styled.button`
  background: transparent;
  border: 1px solid salmon;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  width: 100px;
  color: salmon;
  transition: background 0.3s;
  margin: 30px;

  &:hover {
    background: salmon;
    color: white;
  }
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  gap: 30px;
  padding: 30px;
`;

export function List() {
  return (
    <>
      <StyledButton onClick={() => alert(`Number of emoji: ${emojis.length}`)}>
        Number of emoji
      </StyledButton>
      <StyledList>
        {emojis.map((emoji) => (
          <Item key={emoji} emoji={emoji} />
        ))}
      </StyledList>
    </>
  );
}
