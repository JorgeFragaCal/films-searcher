import ListCardFilmsComponent from '../../components/listCardFilms/ListCardFilmsComponent'
import { useFilmsStore } from '../../store/filmsRated'

function MyListPage() {
  const filmsRated = useFilmsStore((state) => state.filmsRated)

  return (
    <div>
      <h1>MyListPage</h1>
      <main>
        <ListCardFilmsComponent films={filmsRated} />
      </main>
    </div>
  )
}

export default MyListPage
