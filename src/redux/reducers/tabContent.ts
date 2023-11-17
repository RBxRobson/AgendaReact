import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type tabContent = {
  isViewing: boolean
  isRegister: boolean
}

const initialState: tabContent = {
  isViewing: false,
  isRegister: false
}

const tabContentSlice = createSlice({
  name: 'tabContent',
  initialState,
  reducers: {
    displayContent: (
      state,
      action: PayloadAction<{ isViewing: boolean; isRegister: boolean }>
    ) => {
      state.isRegister = action.payload.isRegister
      state.isViewing = action.payload.isViewing
    }
  }
})

export const { displayContent } = tabContentSlice.actions
export default tabContentSlice.reducer
