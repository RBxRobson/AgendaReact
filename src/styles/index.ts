import styled, { createGlobalStyle } from 'styled-components'

//* Estilos globais *\\
const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    min-height: 100vh;
  }
`
export default GlobalStyles

//* Container usado
export const Container = styled.div`
  max-width: 1400px;
  width: 100%;
  padding: 0 20px;
`
