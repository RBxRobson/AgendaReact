import styled from 'styled-components'
import { Avatar } from '../../components/Contact/style'

//* Container de registro *\\
export const Contact = styled.div`
  //* Ocupando todo o espaço *\\
  width: 100%;
  height: 100%;

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
  height: 235px;

  //* Margem inferior para criar espaço entre o cabeçalho e o formulário *\\
  margin-bottom: 7rem;

  //* Cor de fundo do cabeçalho *\\
  background-color: #e9ebff;
`

//* Avatar maior *\\
export const AvatarLG = styled(Avatar)`
  //* Tamanho do avatar e sua fonte *\\
  width: 11rem;
  height: 11rem;
  font-size: 60px;

  //* Posicionando sobre o cabeçalho *\\
  position: absolute;
  top: 2.2rem;
`

//* Formulário do contato *\\
export const Form = styled.form`
  //* Usando grid para layout do formulário *\\
  display: block;
  width: 100%;
  height: 100%;
`

//* Label do formulário *\\
export const Label = styled.label`
  //* Usando flex para layout da label *\\
  display: flex;
  padding: 0.5rem;
  margin: 0 auto;

  //* Largura da label *\\
  max-width: 25rem;

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

  //* Largura total, padding e margem automática *\\
  max-width: 100%;
  padding: 0 8px;

  //* Removendo borda e adicionando uma borda inferior personalizada *\\
  outline: none;
  border: none;
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
  height: 100px;

  //* Cor de fundo do cabeçalho *\\
  background-color: #e9ebff;

  //* Posicionando na parte inferior *\\
  position: absolute;
  bottom: 0px;

  //* Usando flexbox para layout dos botões *\\
  display: flex;
  width: 100%;
`

//* Setup básico do botão *\\
export const BtnContact = styled.button`
  //* Removendo borda e definindo cursor *\\
  border: none;
  cursor: pointer;

  //* Largura total e preenchimento *\\
  width: 100%;

  //* Margem à direita e borda arredondada *\\
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
