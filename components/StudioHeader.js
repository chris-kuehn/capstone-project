import styled from "styled-components";

export default function StudioHeader() {
  return (
    <StyledStudioHeader>
      <StyledStudioHeadline>Creative Coding</StyledStudioHeadline>
      <p>
        Das ist ein kleiner Text der erklärt <br />
        was Generative Art ist und was welche Rolle der Zufall spielt.{" "}
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
