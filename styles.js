import { createGlobalStyle } from "styled-components";
import { Roboto } from "@next/font/google";
import { Roboto_Slab } from "@next/font/google";
import { Roboto_Condensed } from "@next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});
const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["400", "700", "300"],
});

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin:0;
  }
    :root {
      --primary-color: hsl(148 100% 48%); 
      --primary-color-soft: #E6FFF2; 
      --app-black: #001D0E; 
      --off-white:  hsl(148 0% 99%);
      
  }

  body {
    margin: 0;
    font-family: ${roboto.style.fontFamily};
    background-color: lightgrey;
    
  }

h1, h2, h3, h4, h5, a {
  font-family: ${robotoSlab.style.fontFamily};
  font-weight: 700;
}

label {
  font-family: ${robotoCondensed.style.fontFamily};
  font-weight: 400;
}

button {
  font-family: ${robotoCondensed.style.fontFamily};
  
}
`;
