import { useRef, useEffect, useState } from "react";
import styled from "styled-components";

export default function Canvas({ canvasParameter }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    // Beginn drawing statements
    context.fillStyle = `hsl(${canvasParameter.color}, 60%, 95%)`;
    context.fillRect(0, 0, 1080, 1080);

    context.fillStyle = `hsl(${canvasParameter.color}, 100%, 48%)`;
    context.translate(540, 540);
    context.rotate((canvasParameter.rotation * Math.PI) / 180);
    context.fillRect(-100, -100, 200, 200);

    context.lineWidth = canvasParameter.lineWidthes[0];
    context.strokeStyle = `hsl(${canvasParameter.color}, 60%, 95%)`;
    context.strokeRect(-50, -50, 100, 100);

    context.strokeStyle = `hsl(${canvasParameter.color}, 100%, 48%)`;

    for (let i = 0; i <= canvasParameter.outline - 1; i++) {
      let coordinateOnXAxis = -150 - 50 * i;
      let coordinateOnYAxis = -150 - 50 * i;
      let width = 300 + 100 * i;
      let height = 300 + 100 * i;
      context.lineWidth = canvasParameter.lineWidthes[i];
      context.strokeRect(coordinateOnXAxis, coordinateOnYAxis, width, height);
    }

    // Reset the transformation matrix to the identity matrix
    context.setTransform(1, 0, 0, 1, 0, 0);
    // End drawing statements
  }, [canvasParameter, canvasRef]);
  return <StyledCanvas width="1080" height="1080" ref={canvasRef} />;
}

const StyledCanvas = styled.canvas`
  border: 1px solid black;
  width: 100%;
  margin-bottom: 1rem;
`;
