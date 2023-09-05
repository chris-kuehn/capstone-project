import styled from "styled-components";

export default function GalleryHeader() {
  return (
    <StyledGalleryHeader>
      <h1>
        Collection of
        <br />
        your favorite <br />
        artworks
      </h1>
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
