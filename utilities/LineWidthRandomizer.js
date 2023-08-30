export default function lineWidthRandomizer() {
  const randomNumber = Math.random();
  if (randomNumber <= 0.7) {
    return 2;
  } else if (randomNumber <= 0.9) {
    return 8;
  } else {
    return 4;
  }
}
