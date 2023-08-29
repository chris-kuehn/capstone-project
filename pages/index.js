import Canvas from "@/components/Canvas";
import Navigation from "@/components/Navigation";
import StudioHeader from "@/components/StudioHeader";
import Wrapper from "@/components/Wrapper";
import Section from "@/components/Section";
import SectionHeadline from "@/components/SectionHeadline";

export default function HomePage() {
  return (
    <>
      <Navigation pageStatus="studio" />
      <StudioHeader />
      <Section>
        <SectionHeadline> Generator 1</SectionHeadline>
        <Canvas />
      </Section>
    </>
  );
}
