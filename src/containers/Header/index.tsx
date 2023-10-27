//* Importações internas *\\
import Logo from '../../components/Logo'
import * as S from './style'
import SVGAgenda from '../../assets/images/icon-agenda.svg'

const Header = () => {
  return (
    <S.Header>
      <S.HeaderContainer>
        <S.TitleHeader>
          <span>
            <S.IconAgenda
              src={SVGAgenda}
              alt="ícone de uma agenda de contatos"
            />
          </span>
          Agenda<S.HighlightedText>Plus</S.HighlightedText>
        </S.TitleHeader>
        <Logo />
      </S.HeaderContainer>
    </S.Header>
  )
}

export default Header
