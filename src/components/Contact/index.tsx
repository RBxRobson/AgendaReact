import { useDispatch } from 'react-redux'

import * as S from './style'
import IconMore from '../../assets/componentsSVG/IconMore'
import { displayContent } from '../../redux/reducers/tabContent'

type Props = {
  name: string
  lastName: string
  colorContact: string
}

const Contact = ({ name, lastName, colorContact }: Props) => {
  const dispatch = useDispatch()

  const openInfosContact = () => {
    dispatch(displayContent({ isViewing: true, isRegister: false }))
  }

  return (
    <S.Contact>
      <S.Details>
        <S.Avatar color={colorContact}>{name.charAt(0).toUpperCase()}</S.Avatar>
        <S.Name>
          {name} {lastName}
        </S.Name>
      </S.Details>
      <S.BtnView onClick={openInfosContact}>
        <IconMore />
      </S.BtnView>
    </S.Contact>
  )
}

export default Contact
