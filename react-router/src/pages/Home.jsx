import {Link} from '../Link.jsx'

export function HomePage () {
    return(
      <>
        <h1>Home</h1>
        <p>Pagina de ejemplo para crear React Router</p>
       <Link to='/about'>Ir a sobre mi</Link>
      </>
    )
  }
  