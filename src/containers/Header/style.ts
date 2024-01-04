import { styled } from 'styled-components'
import { Container } from '../../styles'

export const Header = styled.header`
  width: 100%;
  height: 150px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--color-primary);
`

export const IconAgenda = styled.img`
  width: 70px;
  transition: 250ms ease-out;

  @media (max-width: 399px) {
    width: 60px;
  }
`

export const TitleHeader = styled.h1`
  font-weight: bold;
  font-size: 2rem;
  color: var(--white-default);

  @media (max-width: 399px) {
    font-size: 1.8rem;
  }

  display: flex;
  align-items: center;

  //* Hover na area do titulo para dar zoom no icone *\\
  &:hover {
    ${IconAgenda} {
      transform: scale(1.1);
    }
  }
`

export const HighlightedText = styled.span`
  font-family:
    Lobster Two,
    cursive;
  color: var(--color-primary-darken);
  text-shadow:
    -2px 2px 4px var(--white-default),
    2px -2px 4px var(--white-default);
  margin: 0 2px;
`

export const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 399px) {
    padding: 0 0.5rem;
  }
`
