import { useSelector } from 'react-redux'

import AdjacentSideBar from '../AdjacentSideBar'
import SideBar from '../SideBar'
import { RootReducer } from '../../redux'

import { ContainerMain } from './style'
import BtnAddContact from '../../components/BtnAddContact'

const Main = () => {
  const { userAction } = useSelector((state: RootReducer) => state.userActions)

  return (
    <ContainerMain>
      <SideBar />
      <AdjacentSideBar />
      {userAction === undefined && <BtnAddContact />}
    </ContainerMain>
  )
}

export default Main
