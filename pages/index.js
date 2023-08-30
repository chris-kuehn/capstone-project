import React, { useState } from "react";
import Canvas from "@/components/Canvas";
import Navigation from "@/components/Navigation";
import StudioHeader from "@/components/StudioHeader";
import Section from "@/components/Section";
import SectionHeadline from "@/components/SectionHeadline";
import lineWidthRandomizer from "@/utilities/LineWidthRandomizer";

export default function HomePage() {
  const [color, setColor] = useState(148);
  const [rotation, setRotation] = useState(45);
  const [outline, setOutline] = useState(0);
  const [variation, setVariation] = useState([
    lineWidthRandomizer(),
    lineWidthRandomizer(),
    lineWidthRandomizer(),
    lineWidthRandomizer(),
    lineWidthRandomizer(),
    lineWidthRandomizer(),
    lineWidthRandomizer(),
    lineWidthRandomizer(),
  ]);

  function handleColorChange(change) {
    setColor(change);
  }

  function handleRotationChange(change) {
    setRotation(change);
  }
  function handleOutlineChange(change) {
    setOutline(change);
  }
  function handleVariation() {
    setVariation([
      lineWidthRandomizer(),
      lineWidthRandomizer(),
      lineWidthRandomizer(),
      lineWidthRandomizer(),
      lineWidthRandomizer(),
      lineWidthRandomizer(),
      lineWidthRandomizer(),
      lineWidthRandomizer(),
    ]);
  }
  return (
    <>
      <Navigation pageStatus="studio" />
      <StudioHeader />
      <Section>
        <SectionHeadline> Generator 1</SectionHeadline>
        <Canvas
          color={color}
          rotation={rotation}
          outline={outline}
          variation={variation}
          handleColorChange={handleColorChange}
          handleRotationChange={handleRotationChange}
          handleOutlineChange={handleOutlineChange}
          handleVariation={handleVariation}
        />
      </Section>
    </>
  );
}
