import { useSelector } from 'react-redux'

import { RootReducer } from '../../redux'
import Header from '../../containers/Header'
import SideBar from '../../containers/SideBar'
import AdjacentSideBar from '../../containers/AdjacentSideBar'
import BtnAddContact from '../../components/BtnAddContact'

const MobileLayout = () => {
  const { userAction } = useSelector((state: RootReducer) => state.userActions)

  const setContainer = () => {
    if (userAction === undefined) {
      return <SideBar />
    } else {
      return <AdjacentSideBar />
    }
  }

  return (
    <>
      {userAction === undefined && <Header />}
      {setContainer()}
      {userAction === undefined && <BtnAddContact />}
    </>
  )
}

export default MobileLayout
