import styled from "styled-components";

export default function Wrapper({ children }) {
  return <StudioGeneratorSection>{children}</StudioGeneratorSection>;
}

const StudioGeneratorSection = styled.div`
  margin: 0;
  padding: 0;
`;
