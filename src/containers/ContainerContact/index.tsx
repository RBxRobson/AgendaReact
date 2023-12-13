import { useDispatch, useSelector } from 'react-redux'
import { FormEvent, useEffect, useState } from 'react'

import { RootReducer } from '../../redux'
import { register, remove } from '../../redux/reducers/contacts'
import { displayContent } from '../../redux/reducers/tabContent'

import * as S from './style'
import IconContact from '../../assets/componentsSVG/IconContact'
import IconTelephone from '../../assets/componentsSVG/IconTelephone'
import IconEmail from '../../assets/componentsSVG/IconEmail'

const ContainerContact = () => {
  //* Acessando nosso estado temporário que terá as informações do contato
  const selectedContact = useSelector(
    (state: RootReducer) => state.contacts.selectedContact
  )

  const { isEditing } = useSelector((state: RootReducer) => state.tabContent)

  const dispatch = useDispatch()

  //* Armazenando dados dos campos inputs *\\
  const [name, setName] = useState('')
  const [telephone, setTelephone] = useState<number | ''>('')
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

  function getFirstLetterUpper(name: string) {
    //* Armazena a primeira letra do nome *\\
    const FirstLetterUpper =
      //* Verifica se 'name' retorna um valor diferente de undefined e
      //* tem comprimento maior que zero, para não causar erro no ts.
      //* Se for diferente iremos resgatar o primeiro caractere em maiúsculo
      //* caso contrário definimos que é uma string vazia
      name !== undefined && name.length > 0 ? name[0].toUpperCase() : ''
    return FirstLetterUpper
  }

  //* Função que irá muda o estado do contato *\\
  const setStateContact = (isEditing: boolean, isViewing: boolean) => {
    dispatch(
      displayContent({
        isEditing: isEditing,
        isViewing: isViewing
      })
    )
    console.log(isEditing)
  }

  const registerContact = (e: FormEvent) => {
    //* Retirando reload da pagina ao efetuar o submit
    e.preventDefault()

    dispatch(
      //* Reducer que irá adicionar um contato.
      //* Recebe os valores digitados nos campos inputs
      //* que foram armazenados nos estados de cada dado
      register({
        name,
        telephone,
        email,
        colorContact: randomColor
      })
    )

    setStateContact(false, true)
  }

  const borderNone = { border: 'none' }

  return (
    <S.Contact>
      <S.ContactHeader />
      <S.AvatarLG
        color={isEditing ? randomColor : selectedContact?.colorContact}
      >
        {getFirstLetterUpper(
          selectedContact === undefined ? '' : selectedContact.name
        )}
      </S.AvatarLG>
      <S.Form onSubmit={registerContact}>
        <S.Label>
          <IconContact />
          <S.Input
            required
            type="text"
            id="name"
            placeholder="Nome"
            onChange={(e) => setName(e.target.value)}
            disabled={isEditing ? false : true}
            value={selectedContact === undefined ? name : selectedContact.name}
          />
        </S.Label>
        <S.Label>
          <IconTelephone />
          <S.Input
            required
            type="number"
            id="telephone"
            placeholder="Telefone"
            onChange={(e) => {
              const value = e.target.valueAsNumber
              if (!isNaN(value)) {
                setTelephone(value)
              }
            }}
            disabled={isEditing ? false : true}
            value={
              selectedContact === undefined
                ? telephone
                : selectedContact.telephone
            }
          />
        </S.Label>
        <S.Label>
          <IconEmail />
          <S.Input
            required
            type="email"
            id="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            disabled={isEditing ? false : true}
            value={
              selectedContact === undefined ? email : selectedContact.email
            }
          />
        </S.Label>
        <S.ContactFooter>
          {isEditing ? (
            <S.BtnContact style={borderNone} type="submit">
              Salvar
            </S.BtnContact>
          ) : (
            <S.BtnContact
              style={borderNone}
              type="button"
              onClick={(e) => {
                //* desativando o comportamento padrão para evitar o submit
                e.preventDefault()
                setStateContact(true, false)}}
            >
              Editar
            </S.BtnContact>
          )}
          {isEditing ? (
            <S.BtnContact
              type="reset"
              onClick={() => setStateContact(false, false)}
            >
              Cancelar
            </S.BtnContact>
          ) : (
            <S.BtnContact
              type="button"
              onClick={() => {
                if (
                  typeof selectedContact?.telephone !== 'string' &&
                  selectedContact?.telephone !== undefined
                ) {
                  dispatch(remove(selectedContact?.telephone))
                  setStateContact(false, false)
                }
              }}
            >
              Remover
            </S.BtnContact>
          )}
        </S.ContactFooter>
      </S.Form>
    </S.Contact>
  )
}

export default ContainerContact
