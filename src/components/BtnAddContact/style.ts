import styled from 'styled-components'

export const Button = styled.button`
  border: none;
  cursor: pointer;
  background-color: var(--color-primary);

  width: 60px;
  height: 60px;
  border-radius: 50%;

  position: absolute;
  bottom: 0.5rem;
  right: 0.5rem;
  z-index: 2;

  img {
    width: 60%;
  }

  &&:hover,
  &&:active {
    filter: brightness(0.92);
  }
`
