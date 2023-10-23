import { configureStore } from '@reduxjs/toolkit'

//* Criando nossa store para fazer uso do redux *\\
const store = configureStore({
  reducer: {}
})

//* Inferindo o tipo de dados com o returnType
//* pois o useSelector não consegue entender sem esse método
export type RootReducer = ReturnType<typeof store.getState>

export default store
