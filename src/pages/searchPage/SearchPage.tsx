import style from './SearchPage.module.css'
import ListCardFilmsComponent from '../../components/listCardFilms/ListCardFilmsComponent'
import useFilms from '../../hooks/useFilms'
import SearchComponent from '../../components/search/SearchComponent'
import { useEffect, useState } from 'react'
import { popularFilmsUrl } from '../../utils/constants'

function SearchPage() {
  const { responseFilms, loading, error, getFilms, setLoading } = useFilms()
  const totalFilms = [...responseFilms]
  const [page, setPage] = useState<number>(1)

  const nextPage = () => {
    setPage(page + 1)
  }
  const previusPage = () => {
    setPage(page > 1 ? page - 1 : 1)
  }

  useEffect(() => {
    setLoading(true)
    getFilms(popularFilmsUrl(page))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  return (
    <div className={style.page}>
      <header>
        <SearchComponent getFilms={getFilms} />
      </header>
      <main>
        {error === '' || error === undefined ? (
          !loading ? (
            totalFilms?.length > 0 ? (
              <ListCardFilmsComponent films={totalFilms} />
            ) : (
              <p>No se han encontrado peliculas</p>
            )
          ) : (
            <p>Cargando.......</p>
          )
        ) : (
          <p>{error}</p>
        )}
        <button onClick={previusPage}>Anterior</button>
        <button onClick={nextPage}>Siguiente</button>
      </main>
    </div>
  )
}

export default SearchPage
