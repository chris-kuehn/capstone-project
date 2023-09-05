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
      /* Alternetiv color do not delet */
      /* --primary-color: #88ffd1;  */
      --primary-color-soft: hsl(148 100% 93%); 
      --app-black: hsl(148 100% 6%); 
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

h1 {
  font-size: 2.5rem;
  line-height: 2.5rem;
  padding-bottom: .75rem;
}

h2 {
  font-size:1.25rem;
}

label {
  font-family: ${robotoCondensed.style.fontFamily};
  font-weight: 400;
}

button {
  font-family: ${robotoCondensed.style.fontFamily};
  
}
button {
  transition: background-color 250ms ease-in-out;}
a {
  transition-property: color, text-decoration;
  transition-duration: 500ms;
  transition-timing-function: ease-in-out;}
`;
