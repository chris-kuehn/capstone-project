import { useRef, useEffect, useState } from "react";
import styled from "styled-components";

export default function Canvas({ canvasParameter }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    // Beginn drawing statements
    context.fillStyle = `hsl(${canvasParameter[0].color}, 60%, 95%)`;
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = `hsl(${canvasParameter[0].color}, 100%, 48%)`;
    context.translate(150, 150);
    context.rotate((canvasParameter[1].rotation * Math.PI) / 180);
    context.fillRect(-40, -40, 80, 80);

    context.lineWidth = canvasParameter[3].lineWidthes[0];
    context.strokeStyle = `hsl(${canvasParameter[0].color}, 60%, 95%)`;
    context.strokeRect(-22.5, -22.5, 45, 45);

    context.strokeStyle = `hsl(${canvasParameter[0].color}, 100%, 48%)`;

    for (let i = 0; i <= canvasParameter[2].outline - 1; i++) {
      let coordinateOnXAxis = -60 - 20 * i;
      let coordinateOnYAxis = -60 - 20 * i;
      let width = 120 + 40 * i;
      let height = 120 + 40 * i;
      context.lineWidth = canvasParameter[3].lineWidthes[i];
      context.strokeRect(coordinateOnXAxis, coordinateOnYAxis, width, height);
    }

    // Reset the transformation matrix to the identity matrix
    context.setTransform(1, 0, 0, 1, 0, 0);
    // End drawing statements
  }, [canvasParameter, canvasRef]);
  return <StyledCanvas width="300" height="300" ref={canvasRef} />;
}

const StyledCanvas = styled.canvas`
  border: 1px solid black;
  margin-bottom: 1rem;
`;
