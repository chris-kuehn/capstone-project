import styled, { css } from "styled-components";

export default function SectionHeadline({ headline }) {
  return <StyledSectionHeadline>{headline}</StyledSectionHeadline>;
}

const StyledSectionHeadline = styled.h2`
  margin-bottom: 0.5rem;
`;
