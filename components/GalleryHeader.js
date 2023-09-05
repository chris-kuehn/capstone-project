import styled from "styled-components";

export default function GalleryHeader() {
  return (
    <StyledGalleryHeader>
      <h1>Collection of your favorite artworks</h1>
      <p>
        View, adjust and download <br />
        your favorite artworks.
      </p>
    </StyledGalleryHeader>
  );
}

const StyledGalleryHeader = styled.header`
  background-color: var(--primary-color-soft);
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
  justify-content: center;
`;
