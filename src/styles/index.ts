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

//* Container usado para aplicar flex box no conteúdo principal *\\
//* Herdando o conteúdo do Container e atribuindo a tag main no lugar de div *\\
export const ContainerMain = styled(Container).attrs({ as: 'main' })`
  display: flex;
  margin: 0 auto;
  padding: 20px;
`
