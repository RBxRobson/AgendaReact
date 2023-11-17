import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import Contact from '../../models/Contact'

type ContactsState = {
  itens: Contact[]
}

const initialState: ContactsState = {
  itens: [
    {
      name: 'Seu',
      lastName: 'Contato',
      telephone: 99999999999,
      email: 'example00@email.com',
      colorContact: '#444'
    }
  ]
}

const ContactsSlice = createSlice({
  name: 'Contacts',
  initialState,
  reducers: {
    register: (state, action: PayloadAction<Contact>) => {
      const numberRegistered = state.itens.find(
        (contact) => contact.telephone === action.payload.telephone
      )
      if (numberRegistered) {
        alert('Já existe um contato com esse numero de telefone.')
      } else {
        state.itens.push(action.payload)
      }
    }
  }
})

export const { register } = ContactsSlice.actions
export default ContactsSlice.reducer
