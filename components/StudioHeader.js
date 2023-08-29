import styled from "styled-components";

export default function StudioHeader() {
  return (
    <StyledStudioHeader>
      <StyledStudioHeadline>Creative Coding</StyledStudioHeadline>
      <p>
        Use the generator and experience how a geometric work of art is created
        from code and how randomness creates uniqueness.
      </p>
    </StyledStudioHeader>
  );
}

const StyledStudioHeader = styled.header`
  background-color: var(--primary-color);
  width: 375px;
  height: 375px;
  margin: 0 auto;
  margin-top: 45px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: end;
`;

const StyledStudioHeadline = styled.h1`
  line-height: 2.25rem;
  padding-bottom: 0.5rem;
`;
