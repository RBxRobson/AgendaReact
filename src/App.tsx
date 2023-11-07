import { useState } from 'react'
import { Provider } from 'react-redux'
import store from './redux'

import './styles/main.css'
import GlobalStyles, { ContainerMain } from './styles'
import Header from './containers/Header'
import SideBar from './containers/SideBar'
import AdjacentSideBar from './containers/AdjacentSideBar'
import ContactForm from './containers/ContactForm'
import BtnAddContact from './components/BtnAddContact'
// import Footer from './containers/Footer'
// import AnimationSmartphone from './components/SmartphoneAnimation'

function App() {
  //* Estado para informar se o usuário está cadastrando um contato *\\
  const [isRegistering, setIsRegistering] = useState(false)
  console.log(isRegistering)

  //* Constante para receber e atualizar a informação sobre o cadastro de contatos*\\
  const updateIsRegistering = (value: boolean) => {
    setIsRegistering(value)
  }

  return (
    <Provider store={store}>
      <GlobalStyles />
      <Header />
      <ContainerMain>
        <SideBar />
        <AdjacentSideBar>
          {
            //* Exibe o formulário de cadastro apenas quando isRegistering = true
            isRegistering && (
              <ContactForm updateIsRegistering={updateIsRegistering} />
            )
          }
        </AdjacentSideBar>

        {
          //* Exibe o botão apenas quando isRegistering = false
          !isRegistering && (
            <BtnAddContact updateIsRegistering={updateIsRegistering} />
          )
        }
      </ContainerMain>
      {/* <AnimationSmartphone /> */}
    </Provider>
  )
}

export default App
