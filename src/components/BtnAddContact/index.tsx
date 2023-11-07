import SvgAddContact from '../../assets/images/contact-new-svgrepo-com.svg'
import { Button } from './style'

type Props = {
  //* Definindo o tipo de uma função que aceita um valor booleano como argumento
  updateIsRegistering: (value: boolean) => void
}

const BtnAddContact = (props: Props) => {
  //* Atualiza o estado *\\
  const openRegisterForm = () => {
    //* Estado do componente pai atualizado para true
    props.updateIsRegistering(true)
  }

  return (
    //* Função que atualiza o estado para true chamada pelo botão via onClick
    <Button onClick={openRegisterForm}>
      <img src={SvgAddContact} alt="ícone de adicionar contato" />
    </Button>
  )
}

export default BtnAddContact
