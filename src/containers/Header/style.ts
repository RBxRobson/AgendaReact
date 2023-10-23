import { styled } from 'styled-components'
import HeaderNuvens from '../../assets/images/HeaderNuvens.svg'

export const HeaderStyle = styled.header`
  //* Container cabeçalho *\
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${HeaderNuvens});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;

  
`

export const TitleHeader = styled.h1`
  //* Estilos aplicados na fonte */
  font-weight: bold;
  font-size: 36px;
  text-shadow: 0 0 8px white;
  color: white;
`
