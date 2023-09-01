import { useState, useRef } from "react";
import Canvas from "@/components/Canvas";
import Navigation from "@/components/Navigation";
import StudioHeader from "@/components/StudioHeader";
import Section from "@/components/Section";
import SectionHeadline from "@/components/SectionHeadline";
import Inputs from "@/components/Inputs";
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

export default function HomePage({ listOfArtworks, handleListOfArtworks }) {
  const [canvasParameter, setCanvasParameter] = useState([
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
    { id: listOfArtworks.length + 1 },
  ]);

  function handleColorChange(change) {
    setCanvasParameter((canvasParameter) => [
      { ...canvasParameter[0], color: change },
      ...canvasParameter.slice(1),
    ]);
  }

  function handleRotationChange(change) {
    setCanvasParameter((canvasParameter) => [
      ...canvasParameter.slice(0, 1),
      { ...canvasParameter[1], rotation: change },
      ...canvasParameter.slice(2),
    ]);
  }

  function handleOutlineChange(change) {
    setCanvasParameter((canvasParameter) => [
      ...canvasParameter.slice(0, 2),
      { ...canvasParameter[2], outline: change },
      ...canvasParameter.slice(3),
    ]);
  }

  function handleVariation(change) {
    setCanvasParameter((canvasParameter) => [
      ...canvasParameter.slice(0, 3),
      { ...canvasParameter[3], lineWidthes: lineWidthsDisributor() },
      ...canvasParameter.slice(4),
    ]);
  }

  const canvasRef = useRef(null);

  return (
    <>
      <Navigation pageStatus="studio" />
      <StudioHeader />
      <Section>
        <SectionHeadline> Generator 1</SectionHeadline>
        <Canvas
          canvasParameter={canvasParameter}
          handleColorChange={handleColorChange}
          handleRotationChange={handleRotationChange}
          handleOutlineChange={handleOutlineChange}
          handleVariation={handleVariation}
          canvasRef={canvasRef}
        />
        <Inputs
          canvasParameter={canvasParameter}
          handleColorChange={handleColorChange}
          handleRotationChange={handleRotationChange}
          handleOutlineChange={handleOutlineChange}
          handleVariation={handleVariation}
          canvasRef={canvasRef}
          listOfArtworks={listOfArtworks}
          handleListOfArtworks={handleListOfArtworks}
        />
      </Section>
    </>
  );
}
