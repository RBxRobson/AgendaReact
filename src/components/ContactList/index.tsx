import { useSelector } from 'react-redux'

import { RootReducer } from '../../redux'
import Contact from '../Contact'

import * as S from './style'

const ContactList = () => {
  const contacts = useSelector((state: RootReducer) => state.contacts.itens)

  return (
    <S.ContactList>
      {contacts.map((c) => (
        <Contact key={c.telephone} name={c.name} lastName={c.lastName} />
      ))}
    </S.ContactList>
  )
}

export default ContactList
