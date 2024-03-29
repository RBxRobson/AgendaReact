import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import Contact from '../../models/Contact'

type ContactsState = {
  itens: Contact[]
  selectedContact: Contact | undefined
}

const initialState: ContactsState = {
  itens: [
    {
      id: 1,
      name: 'S.Exemplo',
      telephone: '99999999999',
      email: 'example00@email.com',
      colorContact: '#A4A6E4'
    },
    {
      id: 2,
      name: 'T.Exemplo',
      telephone: '99999999998',
      email: 'example00@email.com',
      colorContact: '#86A9FE'
    },
    {
      id: 3,
      name: 'F.Exemplo',
      telephone: '99999999997',
      email: 'example00@email.com',
      colorContact: '#D085C0'
    },
    {
      id: 4,
      name: 'H.Exemplo',
      telephone: '99999999996',
      email: 'example00@email.com',
      colorContact: '#79C4F0'
    },
    {
      id: 5,
      name: 'I.Exemplo',
      telephone: '99999999995',
      email: 'example00@email.com',
      colorContact: '#8D8BC3'
    }
  ],
  selectedContact: undefined
}

const ContactsSlice = createSlice({
  name: 'Contacts',
  initialState,
  reducers: {
    //* Reducer que irá registrar um contato
    register: (state, action: PayloadAction<Contact>) => {
      //* Se não houver duplicação de número, adiciona o novo contato
      state.itens.push(action.payload)
    },
    //* Reducer responsável por atualizar um contato
    update: (state, action: PayloadAction<Contact>) => {
      //* Verifica se há um contato selecionado para edição
      if (state.selectedContact) {
        //* Filtra os contatos mantendo todos exceto o contato selecionado
        state.itens = state.itens.filter(
          (contact) => contact.id !== state.selectedContact?.id
        )
        //* Adiciona o contato atualizado à lista de contatos
        state.itens.push(action.payload)
      }
    },
    //* Reducer responsável por remover um contato
    remove: (state, action: PayloadAction<Contact>) => {
      //* Filtramos os contatos para retirar o contato de acordo com o id
      state.itens = state.itens.filter(
        (contact) => contact.id !== action.payload.id
      )
      //* Limpando nosso estado temporário após remover o contato
      state.selectedContact = undefined
    },
    //* Reducer responsável por passar as informações do contato selecionado
    setSelectedContact: (state, action: PayloadAction<Contact | undefined>) => {
      //* Vamos preencher nosso estado temporário selectedContact
      //* com as informações do contato selecionado
      state.selectedContact = action.payload || undefined
    }
  }
})

export const { register, update, remove, setSelectedContact } =
  ContactsSlice.actions

export default ContactsSlice.reducer
