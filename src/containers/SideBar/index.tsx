import ContactList from '../../components/ContactList'
import IconSearch from '../../components/IconSearch'
import * as S from './style'

const SideBar = () => {
  return (
    <S.SideBar>
      <S.InputBox>
        <S.SearchInput placeholder="Pesquisar" />
        <IconSearch />
      </S.InputBox>
      <ContactList />
    </S.SideBar>
  )
}

export default SideBar
