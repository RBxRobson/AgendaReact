import { configureStore } from '@reduxjs/toolkit'

import contactsReducer from './reducers/contacts'
import tabContentReducer from './reducers/tabContent'

//* Criando nossa store para fazer uso do redux *\\
const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    tabContent: tabContentReducer
  }
})

//* Inferindo o tipo de dados com o returnType
//* pois o useSelector não consegue entender sem esse método
export type RootReducer = ReturnType<typeof store.getState>

export default store
