import { useDispatch } from 'react-redux'

import SvgAddContact from '../../assets/images/contact-new-svgrepo-com.svg'
import { Button } from './style'
import { setUserAction } from '../../redux/reducers/userActions'

const BtnAddContact = () => {
  const dispatch = useDispatch()

  const addContact = () => {
    dispatch(setUserAction({ userAction: 'isRegister' }))
  }

  return (
    //* Função que atualiza o estado para true chamada pelo botão via onClick
    <Button onClick={addContact}>
      <img src={SvgAddContact} alt="ícone de adicionar contato" />
    </Button>
  )
}

export default BtnAddContact
