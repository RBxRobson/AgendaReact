import { useSelector } from 'react-redux'

import AnimationSmartphone from '../../components/SmartphoneAnimation'
import ContactForm from '../ContainerContact'
import { StyledAdjacentSideBar } from './style'
import { RootReducer } from '../../redux'

const AdjacentSideBar = () => {
  const { userAction } = useSelector(
    (state: RootReducer) => state.userActions
  )

  return (
    <StyledAdjacentSideBar>
      <AnimationSmartphone />
      {
        //* Mostra as informações do contato de acordo com o modo de exibição
        userAction !== undefined && <ContactForm />
      }
    </StyledAdjacentSideBar>
  )
}

export default AdjacentSideBar
