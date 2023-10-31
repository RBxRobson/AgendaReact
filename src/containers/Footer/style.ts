import { styled } from 'styled-components'
import FooterNuvens from '../../assets/images/FooterNuvens.svg'
import FooterNuvensLG from '../../assets/images/FooterNuvensLG.svg'

export const FooterStyle = styled.footer`
  background-image: url(${FooterNuvens});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 300px;
  position: absolute;
  bottom: 0;

  @media screen and (min-width: 1800px) {
    background-image: url(${FooterNuvensLG});
    background-position: center 30px;
  }
`
