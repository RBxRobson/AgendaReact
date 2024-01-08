import { useDispatch } from 'react-redux'

import { Button } from './style'
import { setUserAction } from '../../redux/reducers/userActions'
import IconAddContact from '../../assets/componentsSVG/IconAddContact'

const BtnAddContact = () => {
  const dispatch = useDispatch()

  const addContact = () => {
    dispatch(setUserAction({ userAction: 'isRegister' }))
  }

  return (
    //* Função que atualiza o estado para true chamada pelo botão via onClick
    <Button onClick={addContact}>
      <IconAddContact />
    </Button>
  )
}

export default BtnAddContact
