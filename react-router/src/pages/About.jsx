import {Link} from '../Link.jsx'

export function AboutPage() {
    return(
      <>
        <h1>About</h1>
        <div>
          <img src='https://pbs.twimg.com/profile_images/1594663633853845506/qXBFlT6K_400x400.jpg' alt='foto perfil'/>
        <p>Creando clon de react router</p>
        </div>
        <Link to='/'>Ir a Home</Link>
      </>
    )
  }