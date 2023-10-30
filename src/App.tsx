import { Provider } from 'react-redux'
import store from './redux'

import SvgAddContact from './assets/images/contact-new-svgrepo-com.svg'
import './styles/main.css'
import GlobalStyles, { BtnAddContact, ContainerMain } from './styles'
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
        <BtnAddContact>
          <img src={SvgAddContact} alt="ícone de adicionar contato" />
        </BtnAddContact>
      </ContainerMain>
      {/* <AnimationSmartphone /> */}
    </Provider>
  )
}

export default App
