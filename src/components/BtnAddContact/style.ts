import styled from 'styled-components'

export const Button = styled.button`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  background-color: var(--color-primary);
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  z-index: 2;

  img {
    width: 60%;
  }
`
