import { styled } from 'styled-components'
import { Container } from '../../styles'

export const Header = styled.header`
  //* Container cabeçalho *\
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-primary);
`

//* Ícone usado no titulo *\\
export const IconAgenda = styled.img`
  width: 70px;
  transition: 250ms ease-out;

  @media (max-width: 399px) {
    width: 60px;
  }
`

//* Titulo do header *\\
export const TitleHeader = styled.h1`
  //* Estilos aplicados na fonte */
  font-weight: bold;
  font-size: 2rem;
  color: var(--color-white-default);

  @media (max-width: 399px) {
    font-size: 1.8rem;
  }

  //* Centralizando verticalmente *\\
  display: flex;
  align-items: center;

  //* Hover na area do titulo para dar zoom no icone *\\
  &:hover {
    ${IconAgenda} {
      transform: scale(1.1);
    }
  }
`

//* Texto marcado usado no titulo do header *\\
export const HighlightedText = styled.span`
  font-family:
    Lobster Two,
    cursive;
  color: var(--color-secondary);
  text-shadow:
    -2px 2px 4px var(--color-white-default),
    2px -2px 4px var(--color-white-default);
  margin: 0 2px;
`

//* Container do cabeçalho *\\
export const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 399px) {
    padding: 0 0.5rem;
  }
`
