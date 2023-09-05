import { useRef, useState } from "react";
import styled, { css } from "styled-components";
import Navigation from "@/components/Navigation";
import Section from "@/components/Section";
import SectionHeadline from "@/components/SectionHeadline";
import GalleryHeader from "@/components/GalleryHeader";
import Canvas from "@/components/Canvas";

export default function HomePage({ listOfArtworks, setListOfArtworks }) {
  const handleRemoveArtwork = (artworkId) => {
    const updatedList = listOfArtworks.filter(
      (artwork) => artwork.id !== artworkId
    );
    setListOfArtworks(updatedList);
  };

  return (
    <>
      <Navigation pageStatus="gallery" />
      <GalleryHeader />
      <Section>
        <StyledUl>
          {listOfArtworks.map((artwork) => (
            <StyledListItem key={artwork.id}>
              <SectionHeadline> Artwork ID-{artwork.id}</SectionHeadline>
              <Canvas canvasParameter={artwork} width="300" height="300" />
              <StyledDeletButton
                type="button"
                onClick={() => handleRemoveArtwork(artwork.id)}
              >
                Delete
              </StyledDeletButton>
            </StyledListItem>
          ))}
        </StyledUl>
      </Section>
    </>
  );
}

const StyledListItem = styled.li`
  list-style: none;
  padding: 0;
  margin-bottom: 3rem;
`;

const StyledUl = styled.ul`
  padding: 0;
`;

const StyledDeletButton = styled.button`
  background-color: var(--primary-color);
  border: none;
  padding: 3px 5px;
  font-weight: 300;
  font-size: 1rem;
  width: 20%;
  &:hover {
    background-color: var(--primary-color-soft);
  }
  &:active {
    background-color: var(--primary-color);
  }
`;
