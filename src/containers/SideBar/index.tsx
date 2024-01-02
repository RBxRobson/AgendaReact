import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../redux'
import { setContactName } from '../../redux/reducers/filter'
import ContactList from '../../components/ContactList'
import IconSearch from '../../assets/componentsSVG/IconSearch'

import * as S from './style'

const SideBar = () => {
  const dispatch = useDispatch()
  const { contactName } = useSelector((state: RootReducer) => state.filter)

  return (
    <S.SideBar>
      <S.InputBox>
        <IconSearch />
        <S.SearchInput
          type="search"
          placeholder="Pesquisar"
          value={contactName}
          onChange={(e) => dispatch(setContactName(e.target.value))}
        />
      </S.InputBox>
      <ContactList />
    </S.SideBar>
  )
}

export default SideBar
