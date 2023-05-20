import React from 'react'
import useSearch from '../../hooks/useSearch'
import useFilms from '../../hooks/useFilms'
import { get } from '../../services/apiRequest'
import { searchUrl } from '../../utils/constants'
import { FilmRaw } from '../../types-d'

function SearchComponent() {
  const { search, setSearch, previousSearch } = useSearch()
  const { setData, setError, setLoading } = useFilms()

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

  const callback = (response: {
    results: FilmRaw[]
    status_message: string
  }) => {
    setData(response.results)
    setError(response.status_message)
    setLoading(false)
    console.log(response.results)
  }
  
  const errorCallback = (data: string) => {
    setError(data)
    console.log('ERROR', data)
  }
  const isLoading = (status: boolean): void => setLoading(status)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (search !== previousSearch.current) {
      get(searchUrl(search), callback, errorCallback, isLoading)
    }
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
