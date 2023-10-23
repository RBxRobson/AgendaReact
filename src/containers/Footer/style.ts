import { styled } from 'styled-components'
import FooterNuvens from '../../assets/images/FooterNuvens.svg'

export const FooterStyle = styled.footer`
  background-image: url(${FooterNuvens});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 300px;
  position: absolute;
  bottom: 0;
`
