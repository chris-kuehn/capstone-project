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
  const [canvasParameter, setCanvasParameter] = useState({
    color: 148,
    rotation: 45,
    outline: 0,

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

    id: listOfArtworks.length + 1,
  });

  function handleColorChange(change) {
    setCanvasParameter((canvasParameter) => ({
      ...canvasParameter,
      color: change,
    }));
  }

  function handleRotationChange(change) {
    setCanvasParameter((canvasParameter) => ({
      ...canvasParameter,
      rotation: change,
    }));
  }

  function handleOutlineChange(change) {
    setCanvasParameter((canvasParameter) => ({
      ...canvasParameter,
      outline: change,
    }));
  }

  function handleVariation(change) {
    setCanvasParameter((canvasParameter) => ({
      ...canvasParameter,
      lineWidthes: lineWidthsDisributor(),
    }));
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
