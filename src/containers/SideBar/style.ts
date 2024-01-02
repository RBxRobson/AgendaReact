import { styled } from 'styled-components'

//* SideBar para lista de contatos *\\
export const SideBar = styled.aside`
  //* Definindo largura da SideBar *\\
  flex: 1;

  //* Ocupando toda a altura da viewport menos a altura do cabeçalho *\\
  height: calc(100vh - 150px);

  //* Espaçamento na vertical *\\
  padding: 1.5rem 0;

  background-color: #fff;
  border-right: 2px solid var(--color-primary);
`

//* Input de busca de contatos *\\
export const SearchInput = styled.input`
  //* Default
  outline: none;
  border: none;
  width: 100%;

  //* Formatação
  font-size: 1.2rem;
  letter-spacing: 1px;

  background-color: transparent;
`

//* Box do input *\\
export const InputBox = styled.div`
  //* Position relative para conter o ícone *\\
  position: relative;

  //* Centralizando o ícone verticalmente *\\
  display: flex;
  align-items: center;
  margin: 0 auto;

  //* Espaçamento entre a lista de contatos
  margin-bottom: 1.5rem;

  background-color: #f9f9f9;
  border: 2px solid #ccc;
  border-radius: 1.5rem;
  width: 80%;
  gap: 0.5rem;
  padding: 0.2rem 0.5rem;
  transition: all ease 200ms;

  &:focus-within {
    border: 2px solid var(--color-primary);
  }

  @media (max-width: 899px) {
    max-width: 550px;
  }
`
