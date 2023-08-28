import GalleryCanvas from "@/components/GalleryCanvas";
import Navigation from "@/components/Navigation";
import Wrapper from "@/components/Wrapper";
import Section from "@/components/Section";
import SectionHeadline from "@/components/SectionHeadline";
import GalleryHeader from "@/components/GalleryHeader";

export default function HomePage() {
  return (
    <>
      <Navigation pageStatus="gallery" />
      <GalleryHeader />
      <Wrapper>
        <Section>
          <SectionHeadline headline="Artwork-ID: 1" />
          <GalleryCanvas />
        </Section>
      </Wrapper>
    </>
  );
}
