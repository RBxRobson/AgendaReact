import { PayloadAction, createSlice } from '@reduxjs/toolkit'

//* Criando a tipagem para o filtro *\\
type FilterType = {
  contactName: string 
}

//* Estado inicial *\\
const initialState: FilterType = {
  contactName: '',
}

//* Criando nosso slice para o Filtro *\\
const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    //* Criando uma action para alterar o termo de busca *\\
    setContactName: (state, action: PayloadAction<string>) => {
      state.contactName = action.payload
    }
  }
})

export const { setContactName } = filterSlice.actions
export default filterSlice.reducer
