import Logo from '../../components/Logo'
import { HeaderStyle, TitleHeader } from './style'

const Header = () => {
  return (
    <HeaderStyle>
      <Logo />
      <TitleHeader> AgendaPlus|RB</TitleHeader>
    </HeaderStyle>
  )
}

export default Header
