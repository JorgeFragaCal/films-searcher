import style from './SearchPage.module.css'
import ListCardFilmsComponent from '../../components/molecules/listCardFilms/ListCardFilmsComponent'
import useFilms from '../../hooks/useFilms'
import SearchComponent from '../../components/atoms/search/SearchComponent'
import { useEffect, useState } from 'react'
import { popularFilmsUrl } from '../../utils/constants'
import MenuComponent from '../../components/atoms/menu/MenuComponent'
import { LOADING, NEXT, NOT_FOUND, PREVIOUS } from '../../translations/es'

function SearchPage() {
  const { responseFilms, loading, error, getFilms, setLoading } = useFilms()
  const totalFilms = [...responseFilms]
  const [page, setPage] = useState<number>(1)

  const nextPage = () => {
    setPage(page + 1)
  }
  const previousPage = () => {
    setPage(page > 1 ? page - 1 : 1)
  }

  useEffect(() => {
    setLoading(true)
    getFilms(popularFilmsUrl(page))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  return (
    <div className={style.page}>
      <MenuComponent />
      <main className={style.mainContainer}>
        <SearchComponent getFilms={getFilms} />
        {error === '' || error === undefined ? (
          !loading ? (
            totalFilms?.length > 0 ? (
              <ListCardFilmsComponent films={totalFilms} />
            ) : (
              <p>{NOT_FOUND}</p>
            )
          ) : (
            <p>{LOADING}</p>
          )
        ) : (
          <p>{error}</p>
        )}
        <div>
          {page > 1 && <button onClick={previousPage}>{PREVIOUS}</button>}
          <button onClick={nextPage}>{NEXT}</button>
        </div>
      </main>
    </div>
  )
}

export default SearchPage