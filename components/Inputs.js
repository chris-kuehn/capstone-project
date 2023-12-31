import { useEffect, useState } from "react";
import styled from "styled-components";

export default function InputsOne({
  canvasParameter,
  handleColorChange,
  handleRotationChange,
  handleOutlineChange,
  handleVariation,
  handleListOfArtworks,
  artworkId,
  setArtworkId,
  setCanvasParameter,
}) {
  function handleAddArtwork() {
    const updatedArtworkId = artworkId + 1;
    setArtworkId(updatedArtworkId);
    setCanvasParameter((canvasParameter) => ({
      ...canvasParameter,
      id: updatedArtworkId,
    }));
  }

  return (
    <StyledInputWrapper>
      <label htmlFor="colorSelector">Color </label>
      <StyledInputRange
        type="range"
        min="0"
        max="360"
        value={canvasParameter.color}
        onChange={(event) => handleColorChange(event.target.value)}
        id="colorSelector"
      />
      <label htmlFor="rotation">Rotation </label>
      <StyledInputRange
        type="range"
        min="0"
        max="90"
        value={canvasParameter.rotation}
        onChange={(event) => handleRotationChange(event.target.value)}
        id="rotation"
      />
      <label htmlFor="outline">Amount of outlines </label>
      <StyledInputRange
        type="range"
        min="0"
        max="8"
        value={canvasParameter.outline}
        onChange={(event) => handleOutlineChange(event.target.value)}
        id="outline"
      />
      <StyledInputButton type="button" onClick={() => handleVariation()}>
        Variation
      </StyledInputButton>
      <StyledInputButton
        type="button"
        onClick={() => {
          handleListOfArtworks(canvasParameter);
          handleAddArtwork();
        }}
      >
        Save
      </StyledInputButton>
    </StyledInputWrapper>
  );
}

const StyledInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledInputButton = styled.button`
  background-color: var(--primary-color);
  border: none;
  padding: 5px 8px;
  font-weight: 300;
  font-size: 1rem;
  width: 30%;
  margin-top: 0.5rem;
  &:hover {
    background-color: var(--primary-color-soft);
  }
  &:active {
    background-color: var(--primary-color);
  }
`;

const StyledInputRange = styled.input`
  margin-bottom: 1rem;
  width: 70%;
`;
