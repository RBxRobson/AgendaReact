import styled, { createGlobalStyle } from 'styled-components'

//* Estilos globais *\\
const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Open Sans, sans-serif;
  }

  body {
    background-color: #e9ebff;
  }
`
export default GlobalStyles

//* Container usado
export const Container = styled.div`
  max-width: 1600px;
  width: 100%;
  padding: 0 20px;
`
