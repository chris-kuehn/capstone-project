import { useRef, useEffect, useState } from "react";
import styled from "styled-components";

function lineWidthRandomizer() {
  const randomNumber = Math.random();
  if (randomNumber <= 0.7) {
    return 2;
  } else if (randomNumber <= 0.9) {
    return 8;
  } else {
    return 4;
  }
}

export default function Canvas() {
  const canvasRef = useRef(null);

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

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    // Beginn drawing statements
    context.fillStyle = `hsl(${color}, 60%, 95%)`;
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = `hsl(${color}, 100%, 50%)`;
    context.translate(150, 150);
    context.rotate((rotation * Math.PI) / 180);
    context.fillRect(-40, -40, 80, 80);

    context.lineWidth = variation[0];
    context.strokeStyle = `hsl(${color}, 60%, 95%)`;
    context.strokeRect(-22.5, -22.5, 45, 45);

    context.strokeStyle = `hsl(${color}, 100%, 50%)`;

    for (let i = 0; i <= outline - 1; i++) {
      let coordinateOnXAxis = -60 - 20 * i;
      let coordinateOnYAxis = -60 - 20 * i;
      let width = 120 + 40 * i;
      let height = 120 + 40 * i;
      context.lineWidth = variation[i];
      context.strokeRect(coordinateOnXAxis, coordinateOnYAxis, width, height);
    }

    // Reset the transformation matrix to the identity matrix
    context.setTransform(1, 0, 0, 1, 0, 0);
    // End drawing statements
  }, [color, rotation, variation, outline]);
  return (
    <>
      <StyledHeadline>Generator 1</StyledHeadline>
      <StyledCanvas width="300" height="300" ref={canvasRef} />
      <label htmlFor="colorSelector">Color </label>
      <StyledInputRange
        type="range"
        min="0"
        max="360"
        value={color}
        onChange={(event) => setColor(event.target.value)}
        id="colorSelector"
      />
      <label htmlFor="rotation">Rotation </label>
      <StyledInputRange
        type="range"
        min="0"
        max="90"
        value={rotation}
        onChange={(event) => setRotation(event.target.value)}
        id="rotation"
      />
      <label htmlFor="outline">Amount of outlines </label>
      <StyledInputRange
        type="range"
        min="0"
        max="8"
        value={outline}
        onChange={(event) => setOutline(event.target.value)}
        id="outline"
      />
      <button
        onClick={() =>
          setVariation([
            lineWidthRandomizer(),
            lineWidthRandomizer(),
            lineWidthRandomizer(),
            lineWidthRandomizer(),
            lineWidthRandomizer(),
            lineWidthRandomizer(),
            lineWidthRandomizer(),
            lineWidthRandomizer(),
          ])
        }
      >
        Variation
      </button>
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

const StyledInputRange = styled.input`
  margin-bottom: 2rem;
`;

// About useRef:
// The canvas Element is marked with   ref={canvasRef}
// The useRef-Hook is used to referenz to that marked canvas Element
