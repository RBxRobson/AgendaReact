import { createSlice } from '@reduxjs/toolkit'

import Contact from '../../models/Contact'

type ContactsState = {
  itens: Contact[]
}

const initialState: ContactsState = {
  itens: [
    {
      name: 'robson',
      lastName: 'barbosa',
      telephone: 5554996994377,
      email: 'robsonnbarbosa0@gmail.com'
    },
    {
      name: 'layana',
      lastName: 'dos santos',
      telephone: 5554996994377,
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
  reducers: {}
})

export default ContactsSlice.reducer
