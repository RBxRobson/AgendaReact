import { useEffect, useState } from 'react'
import * as S from './style'

type Props = {
  name: string
  lastName: string
}

const Contact = ({ name, lastName }: Props) => {
  const [randomColor, setRandomColor] = useState('#FFF')

  function generateColor() {
    const r = Math.floor(Math.random() * 150) + 75
    const g = Math.floor(Math.random() * 150) + 75
    const b = Math.floor(Math.random() * 150) + 75
    const newColor = `rgb(${r}, ${g}, ${b})`
    setRandomColor(newColor)
  }

  useEffect(() => {
    generateColor()
  }, [])

  return (
    <S.Contact>
      <S.Details>
        <S.Avatar color={randomColor}>{name.charAt(0).toUpperCase()}</S.Avatar>
        <S.Name>
          {name} {lastName}
        </S.Name>
      </S.Details>
      <S.View>+</S.View>
    </S.Contact>
  )
}

export default Contact
