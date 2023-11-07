import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import Contact from '../../models/Contact'

type ContactsState = {
  itens: Contact[]
}

const initialState: ContactsState = {
  itens: [
    {
      name: 'robson',
      lastName: 'barbosa',
      telephone: 5554996994373,
      email: 'robsonnbarbosa0@gmail.com'
    },
    {
      name: 'layana',
      lastName: 'dos santos',
      telephone: 5554996994374,
      email: 'robsonnbarbosa0@gmail.com'
    },
    {
      name: 'teste',
      lastName: 'teste',
      telephone: 5554996994377,
      email: 'robsonnbarbosa0@gmail.com'
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
