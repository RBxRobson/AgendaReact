import { Provider } from 'react-redux'
import store from './redux'

import GlobalStyles from './styles'
import Header from './containers/Header'
import Footer from './containers/Footer'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Header />
      <Footer />
    </Provider>
  )
}

export default App
