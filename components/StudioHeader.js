import styled from "styled-components";

export default function StudioHeader() {
  return (
    <StyledStudioHeader>
      <h1>Creative Coding</h1>
      <p>
        Das ist ein kleiner Text der erklärt was Generative Art ist und was
        welche Rolle der Zufall spielt.{" "}
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
  justify-content: center;
`;
