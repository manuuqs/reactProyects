import './App.css'
import { Movies } from './Components/Movies'
import { useMovies } from './Hooks/useMovies'
import { useRef } from 'react'

function App() {

  const mappedMovies = useMovies()
  const inputRef = useRef()

  const handleSubmit = (event) => {
    event.preventDefault()
    const inputEl = inputRef.current
    const value = inputEl.value
    console.log(value)
  }

  return (
    <div className='page'>
      <header>
        <form className='form' onSubmit={handleSubmit}>
          <input ref={inputRef} placeholder='Star Wars, Avenger, Jurassic World...'/>
          <button type='submit'>Buscar</button>
        </form>
      </header>
      <main>
         <Movies movies={mappedMovies}/>
      </main>
    </div>
  )
}
export default App
