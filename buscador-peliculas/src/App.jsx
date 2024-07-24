import { useEffect, useState } from 'react'
import './App.css'
import { Movies } from './Components/Movies'
import { useMovies } from './Hooks/useMovies'

function App() {

  const mappedMovies = useMovies()
  const [query, setQuery] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(query)
  }

  const handleChange = (event) => {
    setQuery(event.target.value)
  }

  useEffect(()=>{

    if (query === ''){
       setError('Película vacía')
       return
    }

    if (query.match(/^\d+$/)){
      setError('Película con números')
      return
    }

    if (query.length < 3){
      setError('Película al menos debe tener 3 caracteres')
      return
    }
  }, [query])

  return (
    <div className='page'>
      <header>
        <form className='form' onSubmit={handleSubmit}>
          <input required onChange={handleChange} value={query} name='query' placeholder='Star Wars, Avenger, Jurassic World...'/>
          <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{color : 'red'}}> {error} </p>}
      </header>
      <main>
         <Movies movies={mappedMovies}/>
      </main>
    </div>
  )
}
export default App
