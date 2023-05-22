import useFilms from '../../../hooks/useFilms'
import useSearch from '../../../hooks/useSearch'
import { searchUrl } from '../../../utils/constants'
import styles from './Search.module.css'
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
  )
}

export default SearchComponent
