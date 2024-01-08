import { styled } from 'styled-components'
import { Container } from '../../styles'

export const Header = styled.header`
  width: 100%;
  height: 150px;

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--white-default);
  z-index: 2;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.1);
`

export const TitleHeader = styled.h1`
  font-weight: bold;
  font-size: 2rem;
  color: var(--color-primary);

  @media (max-width: 399px) {
    font-size: 1.8rem;
  }

  display: flex;
  align-items: center;
`

export const HighlightedText = styled.span`
  font-family:
    Lobster Two,
    cursive;
  color: var(--color-primary);
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
