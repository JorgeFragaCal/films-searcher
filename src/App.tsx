import { NavLink } from 'react-router-dom'
import './App.css'
import { MY_LIST, SEARCH } from './routes/routesConstants'
import { BIENVENIDO, BUSCADOR_DE_PELICULAS, BUSCA_TU_FAVORITA, MI_LISTA } from './translations/es'

function App() {
  return (
    <div className='page'>
      <main>
        <span>{BIENVENIDO} </span>
        <h1>{BUSCADOR_DE_PELICULAS}</h1>
        <div className='links'>
          <NavLink to={SEARCH}>{BUSCA_TU_FAVORITA}</NavLink>
          <NavLink to={MY_LIST}>{MI_LISTA}</NavLink>
        </div>
      </main>
    </div>
  )
}

export default App
