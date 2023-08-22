import { useRef, useEffect, useState } from "react";
import styled from "styled-components";

function lineWidthRandomizer() {
  const randomNumber = Math.random();
  if (randomNumber <= 0.4) {
    return 2;
  } else if (randomNumber <= 0.8) {
    return 8;
  } else {
    return 4;
  }
}

let firstLineWidth = lineWidthRandomizer();
let secondLineWidth = lineWidthRandomizer();
let thirdLineWidth = lineWidthRandomizer();
let fourthLineWidth = lineWidthRandomizer();

export default function CanvasOne() {
  const canvasRef = useRef(null);
  const [backgroundColor, setBackgroundColor] = useState(148);
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    // Beginn drawing statements
    context.fillStyle = `hsl(${backgroundColor}, 60%, 95%)`;
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = "hsl(148, 100%, 50%)";
    context.translate(150, 150);
    context.rotate((0 * Math.PI) / 180);
    context.fillRect(-40, -40, 80, 80);

    context.lineWidth = firstLineWidth;

    context.strokeStyle = `hsl(${backgroundColor}, 60%, 95%)`;
    context.strokeRect(-22.5, -22.5, 45, 45);

    context.strokeStyle = "hsl(148, 100%, 50%)";
    context.lineWidth = secondLineWidth;
    context.strokeRect(-60, -60, 120, 120);

    context.lineWidth = thirdLineWidth;
    context.strokeRect(-80, -80, 160, 160);

    context.lineWidth = fourthLineWidth;
    context.strokeRect(-100, -100, 200, 200);

    // Reset the transformation matrix to the identity matrix
    context.setTransform(1, 0, 0, 1, 0, 0);
    // End drawing statements
  }, [backgroundColor]);
  return (
    <>
      <StyledHeadline>Generator 1</StyledHeadline>
      <StyledCanvas width="300" height="300" ref={canvasRef} />
      <lable htmlFor="colorSelector">Background color </lable>
      <input
        type="range"
        min="0"
        max="360"
        value={backgroundColor}
        onChange={(event) => setBackgroundColor(event.target.value)}
        id="colorSelector"
      />
    </>
  );
}

const StyledCanvas = styled.canvas`
  border: 1px solid black;
  margin-bottom: 1rem;
`;

const StyledHeadline = styled.h1`
  margin-bottom: 1rem;
`;

// About useRef:
// The canvas Element is marked with   ref={canvasRef}
// The useRef-Hook is used to referenz to that marked canvas Element
