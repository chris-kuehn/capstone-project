import { useRef, useEffect, useState } from "react";
import styled from "styled-components";

export default function InputsOne({
  color,
  rotation,
  outline,
  variation,
  handleColorChange,
  handleRotationChange,
  handleOutlineChange,
  handleVariation,
  canvasRef,
}) {
  return (
    <StyledInputWrapper>
      <label htmlFor="colorSelector">Color </label>
      <StyledInputRange
        type="range"
        min="0"
        max="360"
        value={color}
        onChange={(event) => handleColorChange(event.target.value)}
        id="colorSelector"
      />
      <label htmlFor="rotation">Rotation </label>
      <StyledInputRange
        type="range"
        min="0"
        max="90"
        value={rotation}
        onChange={(event) => handleRotationChange(event.target.value)}
        id="rotation"
      />
      <label htmlFor="outline">Amount of outlines </label>
      <StyledInputRange
        type="range"
        min="0"
        max="8"
        value={outline}
        onChange={(event) => handleOutlineChange(event.target.value)}
        id="outline"
      />
      <StyledVariatonButton onClick={() => handleVariation()}>
        Variation
      </StyledVariatonButton>
    </StyledInputWrapper>
  );
}

const StyledInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledVariatonButton = styled.button`
  background-color: var(--primary-color);
  border: none;
  padding: 5px 8px;
  font-weight: 300;
  font-size: 1rem;
  width: 30%;
`;

const StyledInputRange = styled.input`
  margin-bottom: 1rem;
  width: 70%;
`;
