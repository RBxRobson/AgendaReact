import { useDispatch } from 'react-redux'

import * as S from './style'
import IconMore from '../../assets/componentsSVG/IconMore'
import { displayContent } from '../../redux/reducers/tabContent'
import { setSelectedContact } from '../../redux/reducers/contacts'

type Props = {
  name: string
  colorContact: string
  telephone: number
  email: string
}

const Contact = ({ name, colorContact, telephone, email }: Props) => {
  const dispatch = useDispatch()

  const viewingContact = () => {
    dispatch(displayContent({ isEditing: false, isViewing: true }))
    dispatch(setSelectedContact({ name, colorContact, telephone, email }))
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
