import styled from "styled-components";

export default function StudioHeader() {
  return (
    <StyledStudioHeader>
      <h1>Creative Coding</h1>
      <p>
        Use the generator and experience how a geometric work of art is created
        from code and how randomness creates uniqueness.
      </p>
    </StyledStudioHeader>
  );
}

const StyledStudioHeader = styled.header`
  background-color: var(--primary-color);
  min-width: 375px;
  max-width: 600px;
  width: 100%;
  min-height: 375px;
  max-height: 600px;
  height: 100vw;
  margin: 0 auto;
  margin-top: 45px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: end;
`;

const StyledStudioHeadline = styled.h1`
  padding-bottom: 0.5rem;
`;
