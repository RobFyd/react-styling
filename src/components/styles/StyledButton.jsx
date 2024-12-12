import styled from "styled-components";

export const StyledButton = styled.button`
  background: transparent;
  border: 1px solid salmon;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  width: 100px;
  color: salmon;
  transition: background 0.3s;
  margin: ${({ $margin }) => $margin + "px"};

  &:hover {
    background: salmon;
    color: white;
  }
`;
