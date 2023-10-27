import { styled } from 'styled-components'
import { Container } from '../../styles'

export const Header = styled.header`
  //* Container cabeçalho *\
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #acb1f9;
`

//* Ícone usado no titulo *\\
export const IconAgenda = styled.img`
  width: 70px;
  transition: 250ms ease-out;
`

//* Titulo do header *\\
export const TitleHeader = styled.h1`
  //* Estilos aplicados na fonte */
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 36px;
  color: white;

  //* Hover na area do titulo para dar zoom no icone *\\
  &:hover {
    ${IconAgenda} {
      transform: scale(1.1);
    }
  }
`

//* Texto marcado usado no titulo do header *\\
export const HighlightedText = styled.span`
  margin: 0 2px;
  color: #8089d1;
  text-shadow:
    -2px 2px 4px #fff,
    2px -2px 4px #fff;
`

export const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`
