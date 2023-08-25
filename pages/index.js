import Canvas from "@/components/Canvas";
import Navigation from "@/components/Navigation";
import Wrapper from "@/components/Wrapper";

export default function HomePage() {
  return (
    <>
      <Navigation pageStatus="studio" />
      <Wrapper>
        <Canvas />
      </Wrapper>
    </>
  );
}
