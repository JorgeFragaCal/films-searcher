import { Link } from 'react-router-dom'
import './App.css'
import { MY_LIST, SEARCH } from './routes/routesConstants'

function App() {
  return (
    <div className='page'>
      <main>
        <span>Bienvenido tu </span>
        <h1>Buscador de Peliculas</h1>
        <div className='links'>
          <Link to={SEARCH}>Buscar Peliculas</Link>
          <Link to={MY_LIST}>Ver mi lista</Link>
        </div>
      </main>
    </div>
  )
}

export default App
