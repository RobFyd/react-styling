import { useState } from "react";
import styled from "styled-components";
import { StyledButton } from "../styles/StyledButton";

const StyledItem = styled.li`
  background: orange;
  padding: 30px 50px;
  border-radius: 20px;
  text-align: center;
  overflow: hidden;
`;
const StyledEmoji = styled.span`
  display: block;
  margin-bottom: 42px;
  font-size: 32px;
  transition: transform 0.8s;
  ${({ $zoomed }) => $zoomed && "transform: scale(3)"};
`;
//  transform: ${({ $zoomed }) => ($zoomed ? "scale(3)" : "scale(1)")}; // Alternative way to write the above line

export function Item({ emoji, className }) {
  const [zoomed, setZoomed] = useState(false);

  return (
    <StyledItem className={className}>
      <StyledEmoji $zoomed={zoomed}>{emoji}</StyledEmoji>
      <StyledButton
        onClick={() => {
          setZoomed((wasZoomed) => !wasZoomed);
        }}
      >
        {zoomed ? "Zoom Out" : "Zoom In"}
      </StyledButton>
    </StyledItem>
  );
}
