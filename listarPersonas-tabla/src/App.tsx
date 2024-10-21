import { useEffect, useState } from 'react'
import './App.css'
import { type User } from './types.d'
import { UsersList } from './components/UsersList'

function App() {
  const [personas, setPersonas] = useState<User[]>([])
  useEffect(() => {
    fetch('https://randomuser.me/api/?results=100')
      .then(async response => await response.json())
      .then(response => {
        setPersonas(response.results)
      })
      .catch(error => {
        console.error('Error al obtener datos:', error)
      })
  }, [])

  return (
    <div className='App'>
      <h1>Listado de Personas</h1>
      <UsersList personas={personas} />
    </div>
  )
}

export default App
