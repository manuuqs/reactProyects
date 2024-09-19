import './App.css'
import { useEffect, useState } from 'react'
import { EVENTS } from './const'
import { HomePage } from './pages/Home.jsx'
import { AboutPage } from './pages/About.jsx'

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const onLocatiopnChange = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener(EVENTS.PUSHSTATE, onLocatiopnChange)
    window.addEventListener(EVENTS.POPSTATE, onLocatiopnChange)

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocatiopnChange)
      window.removeEventListener(EVENTS.POPSTATE, onLocatiopnChange)
    }

  }, [])
  return (
    <main>
      {currentPath === '/' && <HomePage/>}
      {currentPath === '/about' && <AboutPage/>}
    </main>
  )

 
}

export default App
