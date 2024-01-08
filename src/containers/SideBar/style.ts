import { styled } from 'styled-components'

export const SideBar = styled.aside`
  //* Definindo largura da SideBar *\\
  flex: 1;

  //* Ocupando toda a altura da viewport menos a altura do cabeçalho *\\
  height: calc(100vh - 150px);
  padding: 1.5rem 0;

  background-color: var(--white-default);
  border-right: 2px solid var(--black-soft);
  z-index: 1;
`

export const SearchInput = styled.input`
  outline: none;
  border: none;
  width: 100%;

  //* Estilo de fonte *\\
  font-size: 1.2rem;
  letter-spacing: 1px;

  background-color: transparent;
`

export const InputBox = styled.label`
  position: relative;
  width: 80%;
  gap: 0.5rem;
  padding: 0.2rem 0.5rem;

  display: flex;
  align-items: center;
  margin: 0 auto;

  margin-bottom: 1.5rem;

  background-color: var(--color-input);
  border: 2px solid var(--gray-soft);
  border-radius: 1.5rem;

  transition: all ease 200ms;

  &:focus-within {
    border: 2px solid var(--color-primary);
  }

  &:focus-within svg {
    stroke: var(--color-primary);
  }

  @media (max-width: 899px) {
    max-width: 550px;
  }
`
