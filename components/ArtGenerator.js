import styled from "styled-components";

export default function ArtGenerator() {
  return (
    <section>
      <Styledh2>Generator #1</Styledh2>
      <StyledCanvas width="312px" height="312px"></StyledCanvas>
    </section>
  );
}

const StyledCanvas = styled.canvas`
  border: 1px solid black;
`;

const Styledh2 = styled.h2`
  margin-bottom: 1rem;
`;
