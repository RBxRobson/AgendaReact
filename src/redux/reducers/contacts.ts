import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import Contact from '../../models/Contact'

type ContactsState = {
  itens: Contact[]
  selectedContact: Contact | undefined
}

const initialState: ContactsState = {
  itens: [
    {
      name: 'Fulano',
      telephone: 99999999999,
      email: 'example00@email.com',
      colorContact: '#444'
    },
    {
      name: 'Beltrano',
      telephone: 99999999998,
      email: 'example00@email.com',
      colorContact: '#444'
    },
    {
      name: 'Ciclano',
      telephone: 99999999997,
      email: 'example00@email.com',
      colorContact: '#444'
    },
    {
      name: 'Alano',
      telephone: 99999999996,
      email: 'example00@email.com',
      colorContact: '#444'
    },
    {
      name: 'Daltrano',
      telephone: 99999999995,
      email: 'example00@email.com',
      colorContact: '#444'
    }
  ],
  selectedContact: undefined
}

const ContactsSlice = createSlice({
  name: 'Contacts',
  initialState,
  reducers: {
    //* Reducer que irá verificar se já existe um contato com o mesmo
    //* numero e caso não tiver irá adicionar esse novo contato
    register: (state, action: PayloadAction<Contact>) => {
      //* Conferindo se o numero já foi registrado
      const numberRegistered = state.itens.find(
        (contact) => contact.telephone === action.payload.telephone
      )
      //* Caso já estiver registrado retorna um alert avisando o user
      if (numberRegistered) {
        alert('Já existe um contato com esse numero de telefone.')
      } else {
        //* Passando pela validação usamos o push para adicionar o novo contato
        state.itens.push(action.payload)
      }
    },
    //* Reducer responsável por remover um contato
    remove: (state, action: PayloadAction<number>) => {
      //* Filtramos os contatos para retirar o contato de acordo com o numero
      state.itens = state.itens.filter(
        (contacts) => contacts.telephone !== action.payload
      )
      //* Limpando nosso estado temporário após remover o contato
      state.selectedContact = undefined
    },
    //* Reducer responsável por passar as informações do contato selecionado
    setSelectedContact: (state, action: PayloadAction<Contact>) => {
      //* Vamos preencher nosso estado temporário selectedContact
      //* com as informações do contato selecionado
      state.selectedContact = action.payload
    }
  }
})

export const { register, remove, setSelectedContact } = ContactsSlice.actions
export default ContactsSlice.reducer
