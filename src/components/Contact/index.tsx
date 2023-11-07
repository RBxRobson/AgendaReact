import * as S from './style'
import IconMore from '../../assets/componentsSVG/IconMore'

type Props = {
  name: string
  lastName: string
}

const Contact = ({ name, lastName }: Props) => {
  return (
    <S.Contact>
      <S.Details>
        <S.Avatar color="#000">{name.charAt(0).toUpperCase()}</S.Avatar>
        <S.Name>
          {name} {lastName}
        </S.Name>
      </S.Details>
      <S.View>
        <IconMore />
      </S.View>
    </S.Contact>
  )
}

export default Contact
