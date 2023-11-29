import { useSelector } from 'react-redux'

import AdjacentSideBar from '../AdjacentSideBar'
import SideBar from '../SideBar'
import { RootReducer } from '../../redux'

import { ContainerMain } from './style'
import BtnAddContact from '../../components/BtnAddContact'

const Main = () => {
  const { isEditing, isViewing } = useSelector(
    (state: RootReducer) => state.tabContent
  )

  return (
    <ContainerMain>
      <SideBar />
      <AdjacentSideBar />
      {!isEditing && !isViewing && <BtnAddContact />}
    </ContainerMain>
  )
}

export default Main
