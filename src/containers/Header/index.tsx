//* Importações internas *\\
import Logo from '../../components/Logo'
import * as S from './style'
import IconAgenda from '../../assets/componentsSVG/IconAgenda'

const Header = () => {
  return (
    <S.Header>
      <S.HeaderContainer>
        <S.TitleHeader>
          <span>
            <IconAgenda />
          </span>
          Agenda<S.HighlightedText>Plus</S.HighlightedText>
        </S.TitleHeader>
        <Logo />
      </S.HeaderContainer>
    </S.Header>
  )
}

export default Header
