import styled from "styled-components";

export const StyledButton = styled.button`
  background: transparent;
  border: 1px solid;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  width: 100px;
  color: ${({ $primary }) => ($primary ? "salmon" : "white")};
  transition: background 0.3s;
  margin: ${({ $margin }) => $margin + "px"};

  &:hover {
    color: ${({ $primary }) => ($primary ? "white" : "salmon")};
    background: ${({ $primary }) => ($primary ? "salmon" : "white")};
  }
`;