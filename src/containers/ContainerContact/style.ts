import styled from 'styled-components'
import { Avatar } from '../../components/Contact/style'

//* Container de registro *\\
export const Contact = styled.div`
  //* Ocupando todo o espaço *\\
  width: 100%;
  height: 100%;

  @media (max-width: 899px) {
    min-height: 100vh;
  }

  @media (max-height: 750px) and (min-width: 900px) {
    max-height: calc(100vh - 150px);
    overflow-y: scroll;
  }

  //* Ajustando a camada de sobreposição *\\
  z-index: 1;

  //* Posição relativa para conter os elementos posicionados absolutamente *\\
  position: relative;

  //* Centralizando os itens *\\
  display: flex;
  flex-direction: column;
  align-items: center;

  //* Fundo branco com 90% de opacidade *\\
  background-color: rgba(255, 255, 255, 0.9);
`

//* Cabeçalho do contato *\\
export const ContactHeader = styled.header`
  //* Largura e altura *\\
  width: 100%;
  min-height: 150px;

  //* Cor de fundo do cabeçalho *\\
  background-color: #e9ebff;
`

//* Botão de retorno do contato
export const BtnBack = styled.button`
  //* Default
  cursor: pointer;
  padding: 0;
  border: none;
  background: transparent;

  //* Posicionando o botão no canto superior esquerdo do header
  position: absolute;
  top: 10px;
  left: 10px;
`

//* Avatar maior *\\
export const AvatarLG = styled(Avatar)`
  //* Tamanho do avatar e sua fonte *\\
  margin: 0;
  width: 11rem;
  height: 11rem;
  font-size: 60px;

  //* Posicionando sobre o cabeçalho *\\
  position: absolute;
  top: 2.2rem;
`

//* Formulário do contato *\\
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

//* Label do formulário *\\
export const Label = styled.label`
  //* Usando flex para layout da label *\\
  display: flex;
  padding: 0.5rem;

  svg {
    padding: 0.5rem;
    width: 3rem;
    background-color: var(--color-primary);
    border-radius: 12px 0 0 12px;
  }
`

//* Campos do formulário *\\
export const Input = styled.input`
  //* Tamanho da fonte e alinhamento do texto *\\
  font-size: 1.5rem;

  @media (max-width: 399px) {
    font-size: 1.1rem;
    letter-spacing: 1px;
  }

  //* padding
  max-width: 100%;
  padding: 0 8px;

  //* Removendo borda e adicionando uma borda inferior personalizada *\\
  outline: none;
  border-radius: 0 12px 12px 0;
  border: 2px solid transparent;

  //* Fundo transparente *\\
  background-color: #eee;

  transition: all ease 150ms;

  &:focus {
    border: 2px solid var(--color-primary);
  }
`

//* Footer do contato com os botões do formulário *\\
export const ContactFooter = styled.footer`
  //* Cor de fundo do cabeçalho *\\
  background-color: #e9ebff;

  //* Usando flex para layout dos botões *\\
  width: 100%;
  display: flex;
`

//* Setup básico do botão *\\
export const BtnContact = styled.button`
  //* Removendo borda e definindo cursor *\\
  border: none;
  cursor: pointer;

  //* Largura total e preenchimento *\\
  width: 100%;
  padding: 2rem 0;

  //* Borda para divisão dos botões *\\
  border-left: 1px solid #aaa;

  //* Cor de fundo personalizada e estilos de texto *\\
  background-color: transparent;
  font-size: 22px;
  color: #000;

  transition: all ease 200ms;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }

  &:active {
    background-color: transparent;
  }
`
