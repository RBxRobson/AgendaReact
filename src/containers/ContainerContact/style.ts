import styled from 'styled-components'
import { Avatar } from '../../components/Contact/style'

export const Contact = styled.div`
  width: 100%;
  height: 100%;

  @media (max-width: 899px) {
    min-height: 100vh;
  }

  //* Scroll apenas quando necessário *\\
  @media (max-height: 750px) and (min-width: 900px) {
    max-height: calc(100vh - 150px);
    overflow-y: scroll;
  }

  z-index: 1;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  //* Fundo branco com 90% de opacidade *\\
  background-color: rgba(255, 255, 255, 0.9);
`

export const ContactHeader = styled.header`
  width: 100%;
  min-height: 150px;

  background-color: var(--color-primary-lighter);
`

export const BtnBack = styled.button`
  cursor: pointer;
  padding: 0;
  border: none;
  background: transparent;
  filter: brightness(0.92);

  position: absolute;
  top: 8px;
  left: 8px;

  &&:hover,
  &&:active {
    filter: brightness(0.86);
  }
`

export const AvatarLG = styled(Avatar)`
  margin: 0;
  width: 11rem;
  height: 11rem;
  font-size: 60px;

  position: absolute;
  top: 2.2rem;
`

export const Form = styled.form`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 899px) {
    height: calc(100vh - 150px);
    min-height: 470px;
  }

  @media (max-height: 750px) and (min-width: 900px) {
    min-height: 450px;
  }
`

export const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`

export const Label = styled.label`
  display: flex;
  padding: 0.5rem;

  svg {
    padding: 0.5rem;
    width: 3rem;
    background-color: var(--color-primary);
    border-radius: 12px 0 0 12px;
  }
`

export const Input = styled.input`
  font-size: 1.5rem;

  @media (max-width: 399px) {
    font-size: 1.1rem;
    letter-spacing: 1px;
  }

  max-width: 100%;
  padding: 0 8px;

  outline: none;
  border-radius: 0 12px 12px 0;
  border: 2px solid var(--gray-soft);
  border-left: 2px solid transparent;

  background-color: var(--color-input);

  transition: all ease 150ms;

  &:focus {
    border: 2px solid var(--color-primary);
  }
`

export const ContactFooter = styled.footer`
  background-color: var(--color-primary-lighter);

  width: 100%;
  display: flex;
`

export const BtnContact = styled.button`
  border: none;
  cursor: pointer;

  width: 100%;
  padding: 2rem 0;

  //* Borda para divisão dos botões *\\
  border-left: 2px solid var(--gray-soft);

  background-color: transparent;
  font-size: 22px;

  transition: all ease 200ms;

  &:hover,
  &:active {
    background-color: rgba(0, 0, 0, 0.05);
  }
`
