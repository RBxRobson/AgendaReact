import styled from 'styled-components'
import { Avatar } from '../../components/Contact/style'

//* Container de registro *\\
export const ContactRegister = styled.div`
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

//* Cabeçalho do Container de Registro *\\
export const RegisterHeader = styled.header`
  //* Largura e altura *\\
  width: 100%;
  height: 150px;

  //* Margem inferior para criar espaço entre o cabeçalho e o formulário *\\
  margin-bottom: 7rem;

  //* Cor de fundo do cabeçalho *\\
  background-color: #e9ebff;
`

//* Formulário de registro *\\
export const FormRegister = styled.form`
  //* Usando grid para layout do formulário *\\
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;

  //* Largura do formulário *\\
  width: 50%;
`

//* Campos do formulário *\\
export const InputRegister = styled.input`
  //* Tamanho da fonte e alinhamento do texto *\\
  font-size: 1.5rem;
  text-align: center;

  //* Largura total, padding e margem automática *\\
  width: 100%;
  padding: 0 8px;
  margin: 0 auto;

  //* Removendo borda e adicionando uma borda inferior personalizada *\\
  outline: none;
  border: none;
  border-bottom: 3px solid var(--color-primary);

  //* Fundo transparente *\\
  background-color: transparent;
`

//* Box dos botões do formulário *\\
export const ButtonsForm = styled.div`
  //* Centralizando os botões e adicionando espaço acima *\\
  margin: 0 auto;
  padding-top: 3rem;

  //* Usando flexbox para layout dos botões *\\
  display: flex;
  width: 100%;
`

//* Setup básico do botão *\\
export const SaveBtn = styled.button`
  //* Removendo borda e definindo cursor *\\
  border: none;
  cursor: pointer;

  //* Largura total e preenchimento *\\
  width: 100%;
  padding: 8px;

  //* Margem à direita e borda arredondada *\\
  margin-right: 2rem;
  border-radius: 8px;

  //* Cor de fundo personalizada e estilos de texto *\\
  background-color: #5ec44d;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  color: var(--color-white-default);
`

//* Herdando o estilo básico do botão e alterando a cor *\\
export const CancelBtn = styled(SaveBtn)`
  //* Alterando a cor de fundo do botão de cancelar *\\
  background-color: #f26142;

  //* Removendo margem à direita para evitar espaço extra *\\
  margin-right: 0;
`
