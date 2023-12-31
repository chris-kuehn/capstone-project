import Link from "next/link";
import styled, { css } from "styled-components";

export default function Navigation({ pageStatus }) {
  return (
    <StyledGlobalNavigation>
      <StyledListItemWrapper>
        <StyledListItem>
          <StyledNavigationLink href="/" $isActive={pageStatus === "studio"}>
            Studio
          </StyledNavigationLink>
        </StyledListItem>
        <StyledListItem>
          <StyledNavigationLink
            href="/gallery"
            $isActive={pageStatus === "gallery"}
          >
            Gallery
          </StyledNavigationLink>
        </StyledListItem>
      </StyledListItemWrapper>
    </StyledGlobalNavigation>
  );
}

const StyledGlobalNavigation = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  min-width: 375px;
  max-width: 600px;
  background-color: var(--app-black);
  z-index: 1;

  /* Code von ChatGTP */
  left: 50%;
  transform: translateX(-50%);
  /* Code von ChatGTP */
`;

const StyledListItemWrapper = styled.ul`
  display: flex;
  padding: 0;
`;

const StyledListItem = styled.li`
  list-style: none;
  text-align: center;
  /* Shorthand for - flex-grow:1; - Flex-shrink:1; - flex-basis: 0%; */
  flex: 1;

  &:first-child {
    border-right: 3px solid var(--primary-color);
  }
`;

const StyledNavigationLink = styled(Link)`
  color: white;
  background-color: var(--app-black);
  text-decoration: none;
  display: block;
  padding: 0.75rem 0;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.75px;
  &:hover {
    color: var(--primary-color);
  }

  &:active {
    text-decoration: underline;
    text-underline-offset: 4px;
    text-decoration-thickness: 3px;
  }

  ${({ $isActive }) =>
    $isActive &&
    css`
      color: var(--primary-color);
      text-decoration: underline;
      text-underline-offset: 4px;
      text-decoration-thickness: 3px;
      &:hover {
        color: var(--primary-color);
        font-size: 1rem;
      }
    `};
`;
