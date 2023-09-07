import styled from "styled-components";
import { useRef, useEffect } from "react";

export default function StudioHeader() {
  const studioAnimation = useRef(null);

  useEffect(() => {
    const canvas = studioAnimation.current;
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

    let animationSpeed = 2;
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
      context.fillStyle = `hsl(148, 100%, 60%)`;
      context.fillRect(0, 0, 1800, 1800);

      // animated circle one
      context.fillStyle = `hsla(148, 100%, 93%, 0.4)`;
      context.beginPath();
      context.arc(x, y, 400, 0, Math.PI * 2);
      context.fill();

      // Logic to move circle one
      x = x + changeX;
      y = y + changeY;

      if (x >= 1800 - 400) {
        changeX = randomNegativValue();
      }
      if (x <= 400) {
        changeX = randomPositivValue();
      }

      if (y >= 1800 - 400) {
        changeY = randomNegativValue();
      }
      if (y <= 400) {
        changeY = randomPositivValue();
      }
      // animated invisible circle two
      context.fillStyle = `hsla(148, 100%, 93%, 0.6)`;
      context.beginPath();
      context.arc(x2, y2, 200, 0, Math.PI * 2);
      context.fill();

      // Logic to move circle two
      x2 = x2 + changeX2;
      y2 = y2 + changeY2;

      if (x2 >= 1800 - 200) {
        changeX2 = randomNegativValue() - 3;
      }
      if (x2 <= 200) {
        changeX2 = randomPositivValue() + 3;
      }

      if (y2 >= 1800 - 200) {
        changeY2 = randomNegativValue() - 3;
      }
      if (y2 <= 200) {
        changeY2 = randomPositivValue() + 3;
      }

      // slider1 symbol line
      context.strokeStyle = `hsla(148, 100%, 93%, 1)`;
      context.lineWidth = 10;
      context.lineCap = "round";
      context.beginPath();
      context.moveTo(500, 350);
      context.lineTo(1300, 350);
      context.stroke();
      // slider1 symbol circle
      context.beginPath();
      context.fillStyle = `hsl(148, 100%, 60%)`;
      context.lineWidth = 20;
      context.arc(900, 350, 50, 0, 2 * Math.PI);
      context.stroke();
      context.fill();
      // slider2 symbol line
      context.strokeStyle = `hsla(148, 100%, 93%, 1)`;
      context.lineWidth = 10;
      context.lineCap = "round";
      context.beginPath();
      context.moveTo(300, 550);
      context.lineTo(1500, 550);
      context.stroke();
      // slider2 symbol circle
      context.beginPath();
      context.fillStyle = `hsl(148, 100%, 60%)`;
      context.lineWidth = 20;
      context.arc(700, 550, 50, 0, 2 * Math.PI);
      context.stroke();
      context.fill();
      // slider3 symbol line
      context.strokeStyle = `hsla(148, 100%, 93%, 1)`;
      context.lineWidth = 10;
      context.lineCap = "round";
      context.beginPath();
      context.moveTo(500, 750);
      context.lineTo(1300, 750);
      context.stroke();
      // slider3 symbol circle
      context.beginPath();
      context.fillStyle = `hsl(148, 100%, 60%)`;
      context.lineWidth = 20;
      context.arc(1000, 750, 50, 0, 2 * Math.PI);
      context.stroke();
      context.fill();
    }

    animate();

    // Reset the transformation matrix to the identity matrix
    context.setTransform(1, 0, 0, 1, 0, 0);
    // End drawing statements
  }, [studioAnimation]);
  return (
    <StyledStudioHeader>
      <BackgroundAnimation
        width="1800"
        height="1800"
        ref={studioAnimation}
      ></BackgroundAnimation>
      <StyledContentContainer>
        <h1>Creative Coding</h1>
        <p>
          Use the generator and experience how a geometric work of art is
          created from code and how randomness creates uniqueness.
        </p>
      </StyledContentContainer>
    </StyledStudioHeader>
  );
}

const StyledStudioHeader = styled.header`
  /* background-color: var(--primary-color); */
  min-width: 375px;
  max-width: 600px;
  width: 100%;
  min-height: 375px;
  max-height: 600px;
  height: 100vw;
  margin: 0 auto;
  margin-top: 45px;
  /* padding: 32px; */
  /* display: flex;
  flex-direction: column;
  justify-content: end; */
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
  /* background-color: blue; */
`;

const BackgroundAnimation = styled.canvas`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  /* background-color: yellow; */
`;
