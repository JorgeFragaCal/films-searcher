import { NavLink } from 'react-router-dom'
import { MY_LIST, SEARCH } from '../../routes/routesConstants'
import styles from './MenuComponent.module.css'
import { useFilmsStore } from '../../store/filmsRated'
import { BUSCADOR_DE_PELICULAS, MI_LISTA } from '../../translations/es'
function MenuComponent() {
  const filmsRated = useFilmsStore((state) => state.filmsRated)

  return (
    <div className={styles.container}>
      <NavLink to={SEARCH}>{BUSCADOR_DE_PELICULAS}</NavLink>
      <NavLink to={MY_LIST}>
        {MI_LISTA}({filmsRated.length})
      </NavLink>
    </div>
  )
}

export default MenuComponent
