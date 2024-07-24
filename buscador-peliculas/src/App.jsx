import { useEffect, useState, useRef } from 'react'
import './App.css'
import { Movies } from './Components/Movies'
import { useMovies } from './Hooks/useMovies'

function useSearch () {

  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(()=>{

    if(isFirstInput.current){
      isFirstInput.current = search === ''
      return

    }

    if (search === ''){
       setError('Película vacía')
       return
    }

    if (search.match(/^\d+$/)){
      setError('Película con números')
      return
    }

    if (search.length < 3){
      setError('Película al menos debe tener 3 caracteres')
      return
    }

    setError(null)
  }, [search])

  return { search, updateSearch, error }

}


function App() {

  const { search, updateSearch, error } = useSearch()
  const { movies, getMovies } = useMovies({search})

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies()
  }

  const handleChange = (event) => {
    updateSearch(event.target.value)

  }

  return (
    <div className='page'>
      <header>
        <form className='form' onSubmit={handleSubmit}>
          <input
          style={{
            border : '1px solid transparent',
            borderColor : error ? 'red' : 'transparent'
          }}
           required
           onChange={handleChange}
           value={search} 
           name='query' 
           placeholder='Star Wars, Avenger, Jurassic World...'/>
          <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{color : 'red'}}> {error} </p>}
      </header>
      <main>
         <Movies movies={movies}/>
      </main>
    </div>
  )
}
export default App
