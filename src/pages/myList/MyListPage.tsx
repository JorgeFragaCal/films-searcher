import ListCardFilmsComponent from '../../components/molecules/listCardFilms/ListCardFilmsComponent'
import MenuComponent from '../../components/atoms/menu/MenuComponent'
import { useFilmsStore } from '../../store/filmsRated'
import styles from './MyListPage.module.css'
function MyListPage() {
  const filmsRated = useFilmsStore((state) => state.filmsRated)

  return (
    <div className={styles.page}>
      <MenuComponent />
      <main>
        <ListCardFilmsComponent films={filmsRated} />
      </main>
    </div>
  )
}

export default MyListPage
