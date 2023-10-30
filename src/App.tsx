import { Provider } from 'react-redux'
import store from './redux'

import './styles/main.css'
import GlobalStyles, { ContainerMain } from './styles'
import Header from './containers/Header'
import SideBar from './containers/SideBar'
import AdjacentSideBar from './containers/AdjacentSideBar'
// import Footer from './containers/Footer'
// import AnimationSmartphone from './components/SmartphoneAnimation'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Header />
      <ContainerMain>
        <SideBar />
        <AdjacentSideBar />
      </ContainerMain>
      {/* <AnimationSmartphone /> */}
    </Provider>
  )
}

export default App
