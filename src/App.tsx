import { Provider } from 'react-redux'
import store from './redux'

import './styles/main.css'
import GlobalStyles from './styles'
import Header from './containers/Header'
import Main from './containers/Main'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Header />
      <Main />
    </Provider>
  )
}

export default App
