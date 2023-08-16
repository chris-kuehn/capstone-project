import styled from "styled-components";

export default function ArtGenerator() {
  return (
    <section>
      <StyledHeadline>Generator #1</StyledHeadline>
      <StyledCanvas width="312px" height="312px"></StyledCanvas>
    </section>
  );
}

const StyledCanvas = styled.canvas`
  border: 1px solid black;
`;

const StyledHeadline = styled.h1`
  margin-bottom: 1rem;
`;
