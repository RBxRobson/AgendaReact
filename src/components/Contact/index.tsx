import { useDispatch } from 'react-redux'

import ContactType from '../../models/Contact'
import * as S from './style'
import IconMore from '../../assets/componentsSVG/IconMore'
import { setUserAction } from '../../redux/reducers/userActions'
import { setSelectedContact } from '../../redux/reducers/contacts'


const Contact = ({ id, name, colorContact, telephone, email }: ContactType) => {
  const dispatch = useDispatch()

  const viewingContact = () => {
    dispatch(setUserAction({ userAction: "isViewing" }))
    dispatch(setSelectedContact({ id, name, colorContact, telephone, email }))
  }

  return (
    <S.Contact>
      <S.Details>
        <S.Avatar color={colorContact}>{name.charAt(0).toUpperCase()}</S.Avatar>
        <S.Name>{name}</S.Name>
      </S.Details>
      <S.BtnView onClick={viewingContact}>
        <IconMore />
      </S.BtnView>
    </S.Contact>
  )
}

export default Contact
