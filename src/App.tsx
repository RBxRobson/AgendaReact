import { Provider } from 'react-redux'
import store from './redux'

import './styles/main.css'
import GlobalStyles from './styles'
import DesktopLayout from './pages/Desktop'
import { useEffect, useState } from 'react'
import MobileLayout from './pages/Mobile'

function App() {
  //* Breakpoint layout
  const [smallWindow, setSmallWindow] = useState(window.innerWidth <= 900)

  //* useEffect para controlar o resize da janela
  useEffect(() => {
    const handleResize = () => {
      setSmallWindow(window.innerWidth <= 900)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <Provider store={store}>
      <GlobalStyles />
      {smallWindow ? <MobileLayout /> : <DesktopLayout />}
    </Provider>
  )
}

export default App
