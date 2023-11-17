import { useDispatch } from 'react-redux'

import SvgAddContact from '../../assets/images/contact-new-svgrepo-com.svg'
import { Button } from './style'
import { displayContent } from '../../redux/reducers/tabContent'

const BtnAddContact = () => {
  const dispatch = useDispatch()

  const addContact = () => {
    dispatch(displayContent({ isViewing: false, isRegister: true }))
  }

  return (
    //* Função que atualiza o estado para true chamada pelo botão via onClick
    <Button onClick={addContact}>
      <img src={SvgAddContact} alt="ícone de adicionar contato" />
    </Button>
  )
}

export default BtnAddContact
