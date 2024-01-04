import { FormEvent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../redux'
import { setUserAction } from '../../redux/reducers/userActions'
import {
  register,
  update,
  remove,
  setSelectedContact
} from '../../redux/reducers/contacts'

import * as S from './style'
import IconBack from '../../assets/componentsSVG/IconBack'
import IconContact from '../../assets/componentsSVG/IconContact'
import IconTelephone from '../../assets/componentsSVG/IconTelephone'
import IconEmail from '../../assets/componentsSVG/IconEmail'

const ContainerContact = () => {
  const borderNone = { border: 'none' }

  const dispatch = useDispatch()
  //* Acessando nosso estado temporário do contato selecionado
  const selectedContact = useSelector(
    (state: RootReducer) => state.contacts.selectedContact
  )

  //* Acessa nossa lista de contatos
  const contactList = useSelector((state: RootReducer) => state.contacts.itens)

  //* Acessa o estado responsável por gerenciar as ações do user
  const { userAction } = useSelector((state: RootReducer) => state.userActions)

  //* Armazena dados dos campos inputs
  const [name, setName] = useState('')
  const [telephone, setTelephone] = useState('')
  const [formattedTelephone, setFormattedTelephone] = useState('')
  const [email, setEmail] = useState('')

  //* Atualiza os dados dos inputs de acordo com o contato selecionado
  useEffect(() => {
    if (selectedContact !== undefined) {
      setName(selectedContact.name)
      setEmail(selectedContact.email)
      setTelephone(selectedContact.telephone)
    }
  }, [selectedContact])

  //* Armazena a cor do avatar do contato
  const [randomColor, setRandomColor] = useState('#ccc')

  //* Função para criar uma cor aleatória para o avatar de cada contato
  function generateColor() {
    //* Gerando um valor aleatório para cada canal de cor (r,g,b)
    const r = Math.floor(Math.random() * 150) + 75
    const g = Math.floor(Math.random() * 150) + 75
    const b = Math.floor(Math.random() * 150) + 75

    //* Construindo uma string no formato 'rgb(r, g, b)' com os valores gerados
    const newColor = `rgb(${r}, ${g}, ${b})`

    //* Adicionando a nova cor ao nosso state
    setRandomColor(newColor)
  }

  //* Dispara a função na criação do elemento
  useEffect(() => {
    generateColor()
  }, [])

  //* Transforma a primeira letra do nome em maiúscula
  function getFirstLetterUpper(name: string) {
    //* Armazena a primeira letra do nome
    const FirstLetterUpper =
      //* Verifica se 'name' retorna um valor diferente de undefined e
      //* tem comprimento maior que zero.
      //* Se for diferente iremos resgatar o primeiro caractere em maiúsculo
      //* caso contrário definimos que é uma string vazia.
      name !== undefined && name.length > 0 ? name[0].toUpperCase() : ''
    return FirstLetterUpper
  }

  const registerContact = (e: FormEvent) => {
    e.preventDefault()

    //* Se a ação do usuário for de registro,
    //* vamos adicionar o contato e seleciona-lo
    if (userAction === 'isRegister') {
      const newContact = {
        id: contactList.length + 1,
        name,
        telephone,
        email,
        colorContact: randomColor
      }

      //* Validando o número de celular registrado
      const isNewNumber = contactList.find(
        (contact) => contact.telephone === telephone
      )
      //* Caso não seja um novo número, exibe um alerta
      if (isNewNumber !== undefined) {
        alert('Esse número de telefone esta registrado em outro contato')
        return
      }

      //* Dispatch para registrar um novo contato
      dispatch(register(newContact))

      //* Atualização do contato selecionado após o registro
      dispatch(setSelectedContact(newContact))
    } else {
      //* Caso contrário a ação deve ser de edição,
      //* portanto verificamos se há um contato selecionado
      //* para então atualiza-lo.
      if (selectedContact) {
        dispatch(
          update({
            id: selectedContact.id,
            name,
            telephone,
            email,
            colorContact: selectedContact.colorContact
          })
        )
      }
    }
    //* Dispatch para mudar o modo de exibição após edição/cadastro
    dispatch(setUserAction({ userAction: 'isViewing' }))
  }

  const formatPhoneNumber = (phoneNumber: string) => {
    //* Remove todos os caracteres não numéricos do input
    const cleaned = phoneNumber.replace(/\D/g, '')

    let formatted = ''

    //* Aplica a formatação do telefone
    const setTypePhone = (x: number, y: number) => {
      if (cleaned.length > 0) {
        formatted += `(${cleaned.slice(0, 2)}`
      }
      if (cleaned.length > 2) {
        formatted += `) ${cleaned.slice(2, x)}`
      }
      if (cleaned.length > x) {
        formatted += `-${cleaned.slice(x, y)}`
      }
      setFormattedTelephone(formatted)
    }

    //* Decide a formatação com base no comprimento do número
    if (cleaned.length === 10) {
      //* Números fixos, traço após o 6º dígito
      setTypePhone(6, 10)
    } else {
      //* Números móveis, traço após o 7º dígito
      setTypePhone(7, 11)
    }
  }

  //* Acompanha a alteração do input para disparar a função de formatação
  useEffect(() => {
    formatPhoneNumber(telephone)
  }, [telephone])

  return (
    <S.Contact>
      <S.ContactHeader>
        <S.BtnBack
          type="button"
          onClick={() => {
            dispatch(setUserAction({ userAction: undefined }))
            dispatch(setSelectedContact(undefined))
          }}
        >
          <IconBack />
        </S.BtnBack>
      </S.ContactHeader>
      <S.AvatarLG
        //* Caso esteja registrando um novo número, a cor do avatar será
        //* aleatória, no contrário irá exibir a cor já registrada no contato selecionado
        color={
          userAction === 'isRegister'
            ? randomColor
            : selectedContact?.colorContact
        }
      >
        {getFirstLetterUpper(name)}
      </S.AvatarLG>
      <S.Form onSubmit={registerContact}>
        <S.FormControl>
          <S.Label>
            <IconContact />
            <S.Input
              required
              type="text"
              id="name"
              placeholder="Nome"
              onChange={(e) => setName(e.target.value)}
              disabled={userAction === 'isViewing' ? true : false}
              value={name}
            />
          </S.Label>
          <S.Label>
            <IconTelephone />
            <S.Input
              required
              type="text"
              id="telephone"
              placeholder="Telefone"
              onChange={(e) => {
                setTelephone(e.target.value)
              }}
              disabled={userAction === 'isViewing' ? true : false}
              value={formattedTelephone}
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
              disabled={userAction === 'isViewing' ? true : false}
              value={email}
            />
          </S.Label>
        </S.FormControl>
        <S.ContactFooter>
          {userAction !== 'isViewing' ? (
            <S.BtnContact style={borderNone} type="submit">
              Salvar
            </S.BtnContact>
          ) : (
            <S.BtnContact
              style={borderNone}
              type="button"
              onClick={(e) => {
                e.preventDefault()
                dispatch(setUserAction({ userAction: 'isEditing' }))
              }}
            >
              Editar
            </S.BtnContact>
          )}
          {userAction !== 'isViewing' ? (
            <S.BtnContact
              type="reset"
              onClick={() => {
                dispatch(setUserAction({ userAction: undefined }))
                dispatch(setSelectedContact(undefined))
              }}
            >
              Cancelar
            </S.BtnContact>
          ) : (
            <S.BtnContact
              type="button"
              onClick={() => {
                if (selectedContact) {
                  dispatch(remove(selectedContact))
                  dispatch(setUserAction({ userAction: undefined }))
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
