import { useRef, useState } from "react";
import GalleryCanvas from "@/components/GalleryCanvas";
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
        {listOfArtworks.map((artwork) => (
          <Canvas
            key={artwork.key}
            canvasParameter={artwork}
            width="300"
            height="300"
          />
        ))}
      </Section>
    </>
  );
}
