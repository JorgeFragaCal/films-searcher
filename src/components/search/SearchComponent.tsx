import useSearch from '../../hooks/useSearch'
import { searchUrl } from '../../utils/constants'

function SearchComponent({ getFilms }) {
  const { search, setSearch, previousSearch } = useSearch()
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (previousSearch.current !== search) getFilms(searchUrl(search))
    previousSearch.current = search
  }

  return (
    <>
      <h1>Buscador de Peliculas</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='search'>Busca tu favorita</label>
        <input
          required
          type='text'
          name=''
          id='search'
          placeholder='Ant-man, Iron Man'
          onChange={handleOnChange}
        />
        <input type='submit' value='buscar' />
      </form>
    </>
  )
}

export default SearchComponent
