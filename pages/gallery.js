import GalleryCanvas from "@/components/GalleryCanvas";
import Navigation from "@/components/Navigation";
import Wrapper from "@/components/Wrapper";

export default function HomePage() {
  return (
    <>
      <Navigation pageStatus="gallery" />
      <Wrapper>
        <GalleryCanvas />
      </Wrapper>
    </>
  );
}
