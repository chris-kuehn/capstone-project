import GlobalStyle from "../styles";
import { Roboto } from "@next/font/google";
import { useState } from "react";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function App({ Component, pageProps }) {
  const [listOfArtworks, setListofArtworks] = useState([
    [
      { color: 148 },
      { rotation: 45 },
      { outline: 0 },
      {
        lineWidthes: [2, 2, 2, 2, 2, 2, 2, 2],
      },
      { key: 1 },
    ],
    [
      { color: 148 },
      { rotation: 45 },
      { outline: 0 },
      {
        lineWidthes: [2, 2, 2, 2, 2, 2, 2, 2],
      },
      { key: 2 },
    ],
    [
      { color: 148 },
      { rotation: 45 },
      { outline: 0 },
      {
        lineWidthes: [2, 2, 2, 2, 2, 2, 2, 2],
      },
      { key: 3 },
    ],
  ]);

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} listOfArtworks={listOfArtworks} />
    </>
  );
}
