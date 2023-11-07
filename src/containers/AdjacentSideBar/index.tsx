import { ReactNode } from 'react'
import AnimationSmartphone from '../../components/SmartphoneAnimation'
import { StyledAdjacentSideBar } from './style'

type Props = {
  children: ReactNode
}

const AdjacentSideBar = ({ children }: Props) => {
  return (
    <StyledAdjacentSideBar>
      <AnimationSmartphone />
      {children}
    </StyledAdjacentSideBar>
  )
}

export default AdjacentSideBar
