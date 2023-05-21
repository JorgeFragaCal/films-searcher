import { Link } from 'react-router-dom'
import useFilms from '../../hooks/useFilms'
import useSearch from '../../hooks/useSearch'
import { searchUrl } from '../../utils/constants'
import styles from './Search.module.css'
import { MY_LIST } from '../../routes/routesConstants'
interface Props {
  getFilms: (url: string) => void
}
const SearchComponent: React.FC<Props> = ({ getFilms }) => {
  const { search, setSearch, previousSearch } = useSearch()
  const { setLoading } = useFilms()
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (previousSearch.current !== search) {
      setLoading(true)
      getFilms(searchUrl(search))
    }

    previousSearch.current = search
  }

  return (
    <>
      <h1>Buscador de Peliculas</h1> <Link to={MY_LIST}>Mi lista</Link>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor='search'>Busca tu favorita</label>
        <div className={styles.search}>
          <input
            required
            type='text'
            name=''
            id='search'
            placeholder='Ant-man, Iron Man'
            onChange={handleOnChange}
          />
          <input type='submit' value='🔍' />
        </div>
      </form>
    </>
  )
}

export default SearchComponent
