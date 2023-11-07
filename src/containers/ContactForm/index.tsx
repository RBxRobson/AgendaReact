import { useDispatch } from 'react-redux'
import { FormEvent, useEffect, useState } from 'react'

import { register } from '../../redux/reducers/contacts'

import * as S from './style'

type Props = {
  //* Definindo o tipo de uma função que aceita um valor booleano como argumento
  updateIsRegistering: (value: boolean) => void
}

const ContactForm = (props: Props) => {
  const dispatch = useDispatch()

  //* Armazenando dados dos campos inputs *\\
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [telephone, setTelephone] = useState(0)
  const [email, setEmail] = useState('')

  //* Armazena a cor do avatar do contato *\\
  const [randomColor, setRandomColor] = useState('#ccc')

  //* Função para criar uma cor aleatória para o avatar de cada contato *\\
  function generateColor() {
    //* Gerando um valor aleatório para cada canal de cor (r,g,b)
    const r = Math.floor(Math.random() * 150) + 75
    const g = Math.floor(Math.random() * 150) + 75
    const b = Math.floor(Math.random() * 150) + 75

    //* Construindo uma string no formato 'rgb(r, g, b)' com os valores gerados
    const newColor = `rgb(${r}, ${g}, ${b})`

    //* Adicionando a nova cor ao nosso state *\\
    setRandomColor(newColor)
  }

  //* Dispara a função na criação do elemento *\\
  useEffect(() => {
    generateColor()
  }, [])

  function getFirstLetterUpper() {
    //* Armazena a primeira letra do nome *\\
    const FirstLetterUpper =
      //* Verifica se 'name' retorna um valor diferente de undefined e
      //* tem comprimento maior que zero, para não causar erro no ts.
      //* Se for diferente iremos resgatar o primeiro caractere em maiúsculo
      //* caso contrário definimos que é uma string vazia
      name !== undefined && name.length > 0 ? name[0].toUpperCase() : ''
    return FirstLetterUpper
  }

  const closeRegisterForm = () => {
    //* Estado do componente pai atualizado para false, fechando a aba de cadastro
    props.updateIsRegistering(false)
  }

  const registerContact = (e: FormEvent) => {
    //* Retirando reload da pagina ao efetuar o submit
    e.preventDefault()

    //* Fecha aba de registro
    closeRegisterForm()

    //* Usando o dispatch para chamar nosso reducer
    dispatch(
      //* Reducer que irá adicionar um contato.
      //* Recebe os valores digitados nos campos inputs
      //* que foram armazenados nos estados de cada dado
      register({
        name,
        lastName,
        telephone,
        email
      })
    )
  }

  return (
    <S.ContactRegister>
      <S.RegisterHeader />
      <S.AvatarLG color={randomColor}>{getFirstLetterUpper()}</S.AvatarLG>
      <S.FormRegister onSubmit={registerContact}>
        <S.InputRegister
          required
          type="text"
          id="name"
          placeholder="Nome"
          onChange={(e) => setName(e.target.value)}
        />
        <S.InputRegister
          required
          type="text"
          id="lastName"
          placeholder="Sobrenome"
          onChange={(e) => setLastName(e.target.value)}
        />
        <S.InputRegister
          required
          type="number"
          id="telephone"
          placeholder="Telefone"
          onChange={(e) => setTelephone(e.target.valueAsNumber)}
        />
        <S.InputRegister
          required
          type="email"
          id="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <S.ButtonsForm>
          <S.SaveBtn type="submit">Salvar</S.SaveBtn>
          <S.CancelBtn type="button" onClick={closeRegisterForm}>
            Cancelar
          </S.CancelBtn>
        </S.ButtonsForm>
      </S.FormRegister>
    </S.ContactRegister>
  )
}

export default ContactForm
