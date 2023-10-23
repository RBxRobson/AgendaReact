import { keyframes, styled } from 'styled-components'

const expand = keyframes`
  0% {
    width: 0%;
    height: 100%;
  }

  100% {
    width: 105%;
    height: 100%;
  }
`

const rotate360 = keyframes`
  to {
    transform: rotate(360deg);
  }
`

export const LogoStyle = styled.div`
  //* Tamanho da fonte e sua sombra */
  font-family:
    Lobster Two,
    cursive;
  font-size: 24px;
  font-weight: bold;
  text-shadow: 0 0 10px white;

  //* Alinhamento do texto no centro */
  display: flex;
  justify-content: center;
  align-items: center;

  //* Posicionamento do logo no layout */
  position: absolute;
  left: 20px;
  top: 20px;

  //* Tamanho do logo, ajuste para formato circular, overflow para limitar o before */
  width: 70px;
  height: 70px;
  border-radius: 50%;
  overflow: hidden;

  //* Sombra para dar destaque */
  box-shadow:
    rgba(17, 17, 26, 0.118) 0px 1px 0px,
    rgba(17, 17, 26, 0.103) 0px 0px 8px;

  //* Before usado para criar a box que irá dar o efeito borda animada ao logo */
  &::before {
    content: '';

    //* Posicionamento e reset para preparar elemento para a animação */
    position: absolute;
    width: 0;
    height: 0;

    //* Cor da borda animada do logo */
    background: red;

    //* Animação que causa o efeito borda animada */
    animation:
      ${expand} 2s cubic-bezier(0.41, -0.04, 0, 0.99) infinite alternate,
      ${rotate360} 2s linear infinite;
  }

  //* After usado para sobrepor a box do before, gerando uma impressão de borda ao logo */
  &::after {
    //* Conteúdo textual do logo, sua cor e posicionamento centralizado */
    content: 'RB';
    color: black;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;

    //* Tamanho e formato da box sobreposta ao before, aqui define-se o tamanho da borda */
    width: 66px;
    height: 66px;
    border-radius: 50%;

    //* Cor do background do logo e borda simples para melhorar seu destaque no layout */
    background: green;
  }
`
