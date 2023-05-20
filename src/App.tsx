import './App.css'
import CardFilmsComponent from './components/cardFilms/CardFilmsComponent'
import useFilms from './hooks/useFilms'
import SearchComponent from './components/search/SearchComponent'
import { useEffect } from 'react'
import { popularFilmsUrl } from './utils/constants'

function App() {
  const { responseFilms, loading, error, getFilms, setLoading } = useFilms()

  useEffect(() => {
    setLoading(true)
    getFilms(popularFilmsUrl)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='page'>
      <header>
        <SearchComponent getFilms={getFilms} />
      </header>
      <main>
        {error === '' || error === undefined ? (
          !loading ? (
            responseFilms?.length > 0 ? (
              <CardFilmsComponent films={responseFilms} />
            ) : (
              <p>No se han encontrado peliculas</p>
            )
          ) : (
            <p>Cargando.......</p>
          )
        ) : (
          <p>{error}</p>
        )}
      </main>
    </div>
  )
}

export default App
