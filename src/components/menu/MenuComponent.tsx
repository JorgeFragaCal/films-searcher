import { NavLink } from 'react-router-dom'
import { MY_LIST, SEARCH } from '../../routes/routesConstants'
import styles from './MenuComponent.module.css'
import { useFilmsStore } from '../../store/filmsRated'
function MenuComponent() {
  const filmsRated = useFilmsStore((state) => state.filmsRated)

  return (
    <div className={styles.container}>
      <NavLink to={SEARCH}>Buscador de Peliculas</NavLink>
      <NavLink to={MY_LIST}>Mi lista ({filmsRated.length})</NavLink>
    </div>
  )
}

export default MenuComponent
