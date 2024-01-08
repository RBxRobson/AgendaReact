import styled, { createGlobalStyle } from 'styled-components'

//* Estilos globais *\\
const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Open Sans, sans-serif;
    scroll-behavior: smooth;
  }

  body {
    background-color: var(--white-darken);

    //* Otimização de fonte
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    font-feature-settings:
    "cv11", "salt", "ss01", "ss03",
    "cv01", "cv02", "cv03", "cv04",
    "cv05", "cv06", "cv09", "cv10";
  }
`
export default GlobalStyles

//* Container usado
export const Container = styled.div`
  max-width: 1600px;
  width: 100%;
  padding: 0 20px;
`
