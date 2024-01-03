import { useSelector } from 'react-redux'

import { RootReducer } from '../../redux'
import Contact from '../Contact'

import * as S from './style'

const ContactList = () => {
  const { itens } = useSelector((state: RootReducer) => state.contacts)
  const { contactName } = useSelector((state: RootReducer) => state.filter)

  //* Ordenando os contatos pelo nome em ordem alfabética
  const sortedContacts = itens //* Acessa os contatos
    .slice() //* Cria uma cópia do array
    .sort((a, b) => a.name.localeCompare(b.name))
  //* O localeCompare compara os nomes dos
  //* contatos e retornar qual vem primeiro, assim o sort
  //* irá retornar a cópia do array ordenada alfabeticamente

  const filterContacts = () => {
    const filteredContacts = sortedContacts
    //* Se contactName tiver algum valor, vamos filtrar os contatos
    if (contactName !== undefined) {
      return filteredContacts.filter(
        (contact) =>
          contact.name.toLowerCase().search(contactName.toLowerCase()) >= 0
      )
    } else {
      return sortedContacts
    }
  }
  const contacts = filterContacts()
  console.log(contacts)

  return (
    <S.ContactList>
      {contacts?.map((c) => (
        <Contact
          key={c.id}
          id={c.id}
          name={c.name}
          colorContact={c.colorContact}
          telephone={c.telephone}
          email={c.email}
        />
      ))}
    </S.ContactList>
  )
}

export default ContactList
