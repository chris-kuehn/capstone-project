import styled from "styled-components";

export default function GalleryHeader() {
  return (
    <StyledGalleryHeader>
      <StyledGalleryHeadline>
        Collection of
        <br />
        your favorite <br />
        artworks
      </StyledGalleryHeadline>
      <p>
        View, adjust and download <br />
        your favorite artworks.
      </p>
    </StyledGalleryHeader>
  );
}

const StyledGalleryHeader = styled.header`
  background-color: var(--primary-color-soft);
  width: 375px;
  height: 375px;
  margin: 0 auto;
  margin-top: 45px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledGalleryHeadline = styled.h1`
  line-height: 2.25rem;
  padding-bottom: 0.5rem;
`;
