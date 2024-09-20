/* eslint-disable react/prop-types */
import './App.css'
import { useEffect, useState } from 'react'
import { EVENTS } from './const'
import { HomePage } from './pages/Home.jsx'
import { AboutPage } from './pages/About.jsx'
import { Router } from './pages/Router.jsx'

const routes = [
  {
    path: '/',
    Component: HomePage
  },
  {
    path: '/about',
    Component: AboutPage
  },
  {
    path: '/search/:query',
    Component: ({routeParams}) => <h1>Has buscado: {routeParams.query}</h1>
  }
]

function App() {
  // eslint-disable-next-line no-unused-vars
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
      <Router routes={routes}/>
    </main>
  )

 
}

export default App
