import styled from "styled-components";
import ArtGenerator from "./ArtGenerator";

export default function Wrapper() {
  return (
    <StyledDiv>
      <ArtGenerator />
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  color: green;
  background-color: white;
  width: 376px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 32px;
`;
