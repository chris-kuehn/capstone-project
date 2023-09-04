import { useRef, useState } from "react";
import styled, { css } from "styled-components";
import Navigation from "@/components/Navigation";
import Section from "@/components/Section";
import SectionHeadline from "@/components/SectionHeadline";
import GalleryHeader from "@/components/GalleryHeader";
import Canvas from "@/components/Canvas";

export default function HomePage({ listOfArtworks }) {
  return (
    <>
      <Navigation pageStatus="gallery" />
      <GalleryHeader />
      <Section>
        <SectionHeadline> Artwork ID-1</SectionHeadline>
        <StyledUl>
          {listOfArtworks.map((artwork) => (
            <StyledListItem key={artwork.id}>
              <Canvas canvasParameter={artwork} width="300" height="300" />
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
`;

const StyledUl = styled.ul`
  padding: 0;
`;
