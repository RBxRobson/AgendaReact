import { styled } from 'styled-components'

//* SideBar para lista de contatos *\\
export const SideBar = styled.aside`
  //* Ocupando uma parte do flexbox *\\
  flex: 1;
  //* Ocupando toda a altura da viewport menos a altura do cabeçalho *\\
  min-height: calc(100vh - 190px);
  //* Padding para espaçar verticalmente *\\
  padding: 1rem 0;

  background-color: #fff;
  border: 2px solid var(--color-primary);
`

//* Input de busca de contatos *\\
export const SearchInput = styled.input`
  outline: none;

  font-size: 1rem;
  letter-spacing: 1px;

  //* Tamanho responsivo, padding para espaçamento e formato *\\
  width: 80%;
  padding: 0.5rem;
  border-radius: 1.5rem;

  //* Padding na esquerda do input para não sobrescrever o ícone *\\
  padding-left: 36px;

  //* Margin de 10% para centralizar o input *\\
  margin-left: 10%;

  background-color: #f9f9f9;
  border: 2px solid #ccc;

  transition: all 200ms ease;

  &:focus {
    border: 2px solid var(--color-primary);
  }
`

//* Box do input *\\
export const InputBox = styled.div`
  //* Position relative para conter o ícone com absolute *\\
  position: relative;

  //* Centralizando o ícone verticalmente *\\
  display: flex;
  align-items: center;
`
