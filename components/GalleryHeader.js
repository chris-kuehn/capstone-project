import styled from "styled-components";
import { useRef, useEffect } from "react";

export default function GalleryHeader() {
  const galleryAnimation = useRef(null);

  useEffect(() => {
    const canvas = galleryAnimation.current;
    const context = canvas.getContext("2d");

    // Beginn drawing statements

    function randomPositivValue() {
      let ran = Math.floor((Math.random() + 1) * animationSpeed);
      return ran;
    }

    function randomNegativValue() {
      let ranNeg = -Math.floor((Math.random() + 1) * animationSpeed);
      return ranNeg;
    }

    let animationSpeed = 8;
    let x = 200;
    let changeX = 10;

    let y = 200;
    let changeY = 2;

    let x2 = 1600;
    let changeX2 = 10;

    let y2 = 1600;
    let changeY2 = 2;

    function animate() {
      requestAnimationFrame(animate);
      //Background and deleting previous frame
      // context.translate(0, 0);
      context.fillStyle = `hsl(148, 100%, 93%)`;
      context.fillRect(0, 0, 1800, 1800);

      // animated rectangle one
      context.fillStyle = `hsla(148, 100%, 60%, 0.2)`;
      context.beginPath();
      context.rect(x, y, 800, 800);
      context.fill();

      // Logic to move circle one
      x = x + changeX;
      y = y + changeY;

      if (x >= 1800 - 800) {
        changeX = randomNegativValue() - 1;
      }
      if (x <= 0) {
        changeX = randomPositivValue() + 1;
      }

      if (y >= 1800 - 800) {
        changeY = randomNegativValue() - 1;
      }
      if (y <= 0) {
        changeY = randomPositivValue() + 1;
      }
      // animated circle two
      context.fillStyle = `hsla(148, 100%, 60%, 0.4)`;
      context.beginPath();
      context.rect(x2, y2, 400, 400);
      context.fill();

      // Logic to move rectangle two
      x2 = x2 + changeX2;
      y2 = y2 + changeY2;

      if (x2 >= 1800 - 400) {
        changeX2 = randomNegativValue() - 2;
      }
      if (x2 <= 0) {
        changeX2 = randomPositivValue() + 2;
      }

      if (y2 >= 1800 - 400) {
        changeY2 = randomNegativValue() - 2;
      }
      if (y2 <= 0) {
        changeY2 = randomPositivValue() + 2;
      }

      // canvas symbol
      context.strokeStyle = `hsla(148, 100%, 60%, 1)`;
      context.fillStyle = `hsla(148, 100%, 93%, 1)`;
      context.beginPath();
      context.lineWidth = 10;
      context.translate(900, 600);
      context.rotate((45 * Math.PI) / 180);
      context.rect(-200, -200, 400, 400);
      context.fill();
      context.stroke();

      // artwork middle symbol
      context.beginPath();
      context.rect(-100, -100, 200, 200);
      context.fill();
      context.stroke();
      context.rotate(-(45 * Math.PI) / 180);
      context.translate(-900, -600);
      // artwork left symbol
      context.translate(450, 600);
      context.rotate((45 * Math.PI) / 180);
      context.beginPath();
      context.rect(-50, -50, 100, 100);
      context.fill();
      context.stroke();
      context.rotate(-(45 * Math.PI) / 180);
      context.translate(-450, -600);
      // artwork left symbol
      context.translate(1350, 600);
      context.rotate((45 * Math.PI) / 180);
      context.beginPath();
      context.rect(-50, -50, 100, 100);
      context.fill();
      context.stroke();
      context.rotate(-(45 * Math.PI) / 180);
      context.translate(-1350, -600);
    }

    animate();

    // Reset the transformation matrix to the identity matrix
    context.setTransform(1, 0, 0, 1, 0, 0);
    // End drawing statements
  }, [galleryAnimation]);
  return (
    <StyledGalleryHeader>
      <BackgroundAnimation
        width="1800"
        height="1800"
        ref={galleryAnimation}
      ></BackgroundAnimation>
      <StyledContentContainer>
        <h1>Your favorite artworks</h1>
        <p>
          View, adjust and download <br />
          your favorite artworks
        </p>
      </StyledContentContainer>
    </StyledGalleryHeader>
  );
}

const StyledGalleryHeader = styled.header`
  min-width: 375px;
  max-width: 600px;
  width: 100%;
  min-height: 375px;
  max-height: 600px;
  height: 100vw;
  margin: 0 auto;
  margin-top: 45px;
  position: relative;
`;

const StyledStudioHeadline = styled.h1`
  padding-bottom: 0.5rem;
`;
const StyledContentContainer = styled.div`
  padding: 32px;
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: end;
`;

const BackgroundAnimation = styled.canvas`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
`;
