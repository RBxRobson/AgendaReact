import { styled } from 'styled-components'

//* Componente que irá exibir os dados do contato e o formulário de cadastro *\\
export const StyledAdjacentSideBar = styled.div`
  //* Centralizando e ocupando todo espaço disponível
  display: flex;
  align-items: center;
  width: 100%;
  //* Ocupando 2 partes do layout
  flex: 2;

  position: relative;

  background-color: var(--color-white-default);
  border: 2px solid var(--color-primary);
  border-left: none;
`
