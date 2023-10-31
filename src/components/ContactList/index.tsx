import { useSelector } from 'react-redux'

import { RootReducer } from '../../redux'
import Contact from '../Contact'

import * as S from './style'

const ContactList = () => {
  const contacts = useSelector((state: RootReducer) => state.contacts.itens)

  return (
    <S.ContactList>
      <Contact name={contacts[0].name} lastName={contacts[0].lastName} />
      <Contact name={contacts[1].name} lastName={contacts[1].lastName} />
      <Contact name={contacts[2].name} lastName={contacts[2].lastName} />
    </S.ContactList>
  )
}

export default ContactList
