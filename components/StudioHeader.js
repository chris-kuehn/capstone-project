import styled from "styled-components";

export default function StudioHeader() {
  return (
    <StyledStudioHeader>
      <h1>
        Creative <br />
        Coding
      </h1>
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
  padding-bottom: 0.5rem;
`;
