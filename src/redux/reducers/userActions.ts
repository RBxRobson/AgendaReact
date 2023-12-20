import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type userActionType =  "isEditing" | "isViewing" | "isRegister" | undefined

interface userActions {
  userAction: userActionType;
}

const initialState: userActions = {
  userAction: undefined,
}

const userActionSlice = createSlice({
  name: 'userActions',
  initialState,
  reducers: {
    setUserAction: (
      state,
      action: PayloadAction<{ userAction: userActionType }>
    ) => {
      state.userAction = action.payload.userAction
    }
  }
})

export const { setUserAction } = userActionSlice.actions
export default userActionSlice.reducer
