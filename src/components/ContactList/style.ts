import styled from 'styled-components'

export const ContactList = styled.ol`
  list-style: none;
  overflow-y: scroll;

  //* Altura máxima subtraída dos elementos superiores (header e barra de pesquisa)
  max-height: calc(100vh - 238px);
  border-top: 1px solid var(--gray-soft);
`
