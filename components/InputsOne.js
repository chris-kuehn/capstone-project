import { useRef, useEffect, useState } from "react";
import styled from "styled-components";

export default function InputsOne({
  canvasOneParameter,
  variation,
  handleColorChangeNeu,
  handleRotationChangeNeu,
  handleOutlineChangeNeu,
  handleVariationNeu,
  canvasRef,
}) {
  return (
    <StyledInputWrapper>
      <label htmlFor="colorSelector">Color </label>
      <StyledInputRange
        type="range"
        min="0"
        max="360"
        value={canvasOneParameter[0].color}
        onChange={(event) => handleColorChangeNeu(event.target.value)}
        id="colorSelector"
      />
      <label htmlFor="rotation">Rotation </label>
      <StyledInputRange
        type="range"
        min="0"
        max="90"
        value={canvasOneParameter[1].rotation}
        onChange={(event) => handleRotationChangeNeu(event.target.value)}
        id="rotation"
      />
      <label htmlFor="outline">Amount of outlines </label>
      <StyledInputRange
        type="range"
        min="0"
        max="8"
        value={canvasOneParameter[2].outline}
        onChange={(event) => handleOutlineChangeNeu(event.target.value)}
        id="outline"
      />
      <StyledVariatonButton onClick={() => handleVariationNeu()}>
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
