import styled from "styled-components";

const Button = styled.button`
  padding: 8px;
  border-radius: 8px;
  margin: 0 5px;
  color: ${({ color }) => (color === null ? "black" : color)};
  background-color: ${({ bgColor }) => (bgColor === null ? "none" : bgColor)};
  transition: opacity 0.2s ease-in;
  &:hover {
    opacity: 0.5;
  }
  @media screen and (max-width: 1200px) {
    font-size: 12px;
  }
`;

export default ({ text, color = null, bgColor = null }) => (
  <Button color={color} bgColor={bgColor}>
    {text}
  </Button>
);
