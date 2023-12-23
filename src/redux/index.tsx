import { configureStore } from '@reduxjs/toolkit'

import contactsReducer from './reducers/contacts'
import userActionsReducer from './reducers/userActions'
import filterReducer from './reducers/filter'

//* Criando nossa store para fazer uso do redux *\\
const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    userActions: userActionsReducer,
    filter: filterReducer
  }
})

//* Inferindo o tipo de dados com o returnType
//* pois o useSelector não consegue entender sem esse método
export type RootReducer = ReturnType<typeof store.getState>

export default store
