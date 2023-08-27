import styled from "styled-components";

export default function Wrapper({ children }) {
  return <StyledWrapper>{children}</StyledWrapper>;
}

const StyledWrapper = styled.div`
  background-color: var(--off-white);
  width: 375px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 32px;
`;
