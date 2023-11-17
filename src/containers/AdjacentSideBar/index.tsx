import { useSelector } from 'react-redux'

import AnimationSmartphone from '../../components/SmartphoneAnimation'
import ContactForm from '../ContactForm'
import ContactInfos from '../ContactInfos'
import { StyledAdjacentSideBar } from './style'
import { RootReducer } from '../../redux'

const AdjacentSideBar = () => {
  const { isViewing, isRegister } = useSelector(
    (state: RootReducer) => state.tabContent
  )

  return (
    <StyledAdjacentSideBar>
      <AnimationSmartphone />
      {
        //* Exibe o formulário de cadastro apenas quando o usuário estiver registrando
        //* e não visualizando as informações de um contato contato
        isRegister && !isViewing && <ContactForm />
      }
      {
        //* Exibe o formulário de cadastro apenas quando o usuário estiver registrando
        //* e não visualizando as informações de um contato contato
        !isRegister && isViewing && <ContactInfos />
      }
    </StyledAdjacentSideBar>
  )
}

export default AdjacentSideBar
