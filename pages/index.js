import React, { useState, useRef } from "react";
import CanvasOne from "@/components/CanvasOne";
import Navigation from "@/components/Navigation";
import StudioHeader from "@/components/StudioHeader";
import Section from "@/components/Section";
import SectionHeadline from "@/components/SectionHeadline";
import InputsOne from "@/components/InputsOne";
import lineWidthRandomizer from "@/utilities/LineWidthRandomizer";
import lineWidthsDisributor from "@/utilities/LineWidthsDistributor";

let lineWidth1 = lineWidthRandomizer();
let lineWidth2 = lineWidthRandomizer();
let lineWidth3 = lineWidthRandomizer();
let lineWidth4 = lineWidthRandomizer();
let lineWidth5 = lineWidthRandomizer();
let lineWidth6 = lineWidthRandomizer();
let lineWidth7 = lineWidthRandomizer();
let lineWidth8 = lineWidthRandomizer();

export default function HomePage() {
  const [canvasOneParameter, setCanvasOneParameter] = useState([
    { color: 148 },
    { rotation: 45 },
    { outline: 0 },
    {
      lineWidthes: [
        lineWidth1,
        lineWidth2,
        lineWidth3,
        lineWidth4,
        lineWidth5,
        lineWidth6,
        lineWidth7,
        lineWidth8,
      ],
    },
  ]);

  function handleColorChangeNeu(change) {
    setCanvasOneParameter((canvasOneParameter) => [
      { ...canvasOneParameter[0], color: change },
      ...canvasOneParameter.slice(1),
    ]);
  }

  function handleRotationChangeNeu(change) {
    setCanvasOneParameter((canvasOneParameter) => [
      ...canvasOneParameter.slice(0, 1),
      { ...canvasOneParameter[1], rotation: change },
      ...canvasOneParameter.slice(2),
    ]);
  }

  function handleOutlineChangeNeu(change) {
    setCanvasOneParameter((canvasOneParameter) => [
      ...canvasOneParameter.slice(0, 2),
      { ...canvasOneParameter[2], outline: change },
      ...canvasOneParameter.slice(3),
    ]);
  }

  function handleVariationNeu(change) {
    setCanvasOneParameter((canvasOneParameter) => [
      ...canvasOneParameter.slice(0, 3),
      { ...canvasOneParameter[3], lineWidthes: lineWidthsDisributor() },
      ...canvasOneParameter.slice(4),
    ]);
  }

  const canvasRef = useRef(null);

  return (
    <>
      <Navigation pageStatus="studio" />
      <StudioHeader />
      <Section>
        <SectionHeadline> Generator 1</SectionHeadline>
        <CanvasOne
          canvasOneParameter={canvasOneParameter}
          handleColorChangeNeu={handleColorChangeNeu}
          handleRotationChangeNeu={handleRotationChangeNeu}
          handleOutlineChangeNeu={handleOutlineChangeNeu}
          handleVariationNeu={handleVariationNeu}
          canvasRef={canvasRef}
        />
        <InputsOne
          canvasOneParameter={canvasOneParameter}
          handleColorChangeNeu={handleColorChangeNeu}
          handleRotationChangeNeu={handleRotationChangeNeu}
          handleOutlineChangeNeu={handleOutlineChangeNeu}
          handleVariationNeu={handleVariationNeu}
          canvasRef={canvasRef}
        />
      </Section>
    </>
  );
}
