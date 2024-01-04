import styled from 'styled-components'

//* Container usado para aplicar flex box no conteúdo principal *\\
export const ContainerMain = styled.main`
  width: 100%;
  max-width: 1600px;
  min-height: calc(100vh - 150px);

  border-right: 2px solid var(--color-primary);
  border-left: 2px solid var(--color-primary);

  display: flex;
  margin: 0 auto;
  position: relative;
`
