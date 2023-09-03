import GlobalStyle from "../styles";
import { Roboto } from "@next/font/google";
import { useState } from "react";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function App({ Component, pageProps }) {
  const [listOfArtworks, setListOfArtworks] = useState([]);

  function handleListOfArtworks(currentArray) {
    setListOfArtworks((prevList) => {
      return [...prevList, ...[currentArray]];
    });
  }

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        listOfArtworks={listOfArtworks}
        handleListOfArtworks={handleListOfArtworks}
      />
    </>
  );
}
