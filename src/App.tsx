import './App.css'
import CardFilmsComponent from './components/cardFilms/CardFilmsComponent'
import useFilms from './hooks/useFilms'
import SearchComponent from './components/search/SearchComponent'

function App() {
  const { responseFilms, loading, error } = useFilms()
  return (
    <div className='page'>
      <header>
        <SearchComponent />
      </header>
      <main>
        {error === '' || error === undefined ? (
          responseFilms?.length > 0 ? (
            <CardFilmsComponent films={responseFilms} loading={loading} />
          ) : (
            <p>No se han encontrado peliculas</p>
          )
        ) : (
          <p>{error}</p>
        )}
      </main>
    </div>
  )
}

export default App
