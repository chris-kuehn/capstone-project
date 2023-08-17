import { useRef, useEffect } from "react";
import styled from "styled-components";

export default function CanvasOne() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    // Beginn drawing statements
    ctx.fillStyle = "hsl(113, 60%, 95%)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "hsl(148, 100%, 50%)";
    ctx.translate(150, 150);
    ctx.rotate((45 * Math.PI) / 180);
    ctx.beginPath();
    ctx.fillRect(-50, -50, 100, 100);
    // End drawing statements
  }, []);
  return <StyledCanvas width="300" height="300" ref={canvasRef} />;
}

const StyledCanvas = styled.canvas`
  border: 1px solid black;
`;

// About useRef:
// The canvas Element is marked with   ref={canvasRef}
// The useRef-Hook is used to referenz to that marked canvas Element
