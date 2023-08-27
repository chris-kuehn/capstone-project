import Canvas from "@/components/Canvas";
import Navigation from "@/components/Navigation";
import StudioHeader from "@/components/StudioHeader";
import Wrapper from "@/components/Wrapper";

export default function HomePage() {
  return (
    <>
      <Navigation pageStatus="studio" />
      <StudioHeader />
      <Wrapper>
        <Canvas />
      </Wrapper>
    </>
  );
}
