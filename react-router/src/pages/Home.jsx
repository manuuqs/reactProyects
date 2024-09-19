import {navigate} from '../Link.jsx'

export function HomePage () {
    return(
      <>
        <h1>Home</h1>
        <p>Pagina de ejemplo para crear React Router</p>
        <button onClick={() => navigate('/about')}>Ir a sobre nosotros</button>
      </>
    )
  }
  