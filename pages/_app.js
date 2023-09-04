import GlobalStyle from "../styles";
import { Roboto } from "@next/font/google";
import { useState } from "react";
import useLocalStorageState from "use-local-storage-state";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function App({ Component, pageProps }) {
  const [listOfArtworks, setListOfArtworks] = useLocalStorageState(
    "listOfArtworks",
    { defaultValue: [] }
  );

  const [artworkId, setArtworkId] = useLocalStorageState("artworkId", {
    defaultValue: 1,
  });

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
        artworkId={artworkId}
        setArtworkId={setArtworkId}
      />
    </>
  );
}
