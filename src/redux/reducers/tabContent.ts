import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type tabContent = {
  isEditing: boolean
  isViewing: boolean
}

const initialState: tabContent = {
  isEditing: false,
  isViewing: false
}

const tabContentSlice = createSlice({
  name: 'tabContent',
  initialState,
  reducers: {
    displayContent: (
      state,
      action: PayloadAction<{ isEditing: boolean; isViewing: boolean }>
    ) => {
      state.isEditing = action.payload.isEditing
      state.isViewing = action.payload.isViewing
    }
  }
})

export const { displayContent } = tabContentSlice.actions
export default tabContentSlice.reducer
