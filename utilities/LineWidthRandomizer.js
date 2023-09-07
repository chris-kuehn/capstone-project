export default function lineWidthRandomizer() {
  const randomNumber = Math.random();
  if (randomNumber <= 0.5) {
    return 4;
  } else if (randomNumber <= 0.9) {
    return 16;
  } else {
    return 12;
  }
}
