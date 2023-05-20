import { useEffect, useState } from 'react'
import { get } from '../services/apiRequest'
import { popularFilmsUrl } from '../utils/constants'
import { FilmRaw } from '../types-d'

export default function useFilms() {
  const [data, setData] = useState<FilmRaw[]>([])
  const [patata, setpatata] = useState([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  const callback = (response: {
    results: FilmRaw[]
    status_message: string
  }) => {
    setData(response.results)
    setError(response.status_message)
    setLoading(false)
  }
  const errorCallback = (data: string) => {
    setError(data)
    console.log('ERROR', data)
  }
  const isLoading = (status: boolean) => setLoading(status)

  useEffect(() => {
    get(popularFilmsUrl, callback, errorCallback, isLoading)
  }, [])

  const responseFilms = data?.map((film: FilmRaw) => ({
    id: film.id,
    title: film.original_title,
    image: film.poster_path,
    date: film.release_date,
  }))

  return {
    responseFilms,
    setData,
    loading,
    setLoading,
    setError,
    error,
    data,
    patata,setpatata
  }
}
