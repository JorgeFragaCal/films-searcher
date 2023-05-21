import { useState } from 'react'
import { get } from '../services/apiRequest'
import { FilmRaw } from '../types-d'

export default function useFilms() {
  const [data, setData] = useState<FilmRaw[]>([])
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

  const getFilms = (url: string) => {
    get(url, callback, errorCallback, isLoading)
  }

  const responseFilms = data?.map((film: FilmRaw) => ({
    id: film.id,
    title: film.original_title,
    image: film.poster_path,
    date: film.release_date,
    overview: film.overview,
    vote_average: film.vote_average,
    vote_count: film.vote_count,
    genre_ids: film.genre_ids,
  }))

  return {
    responseFilms,
    loading,
    error,
    getFilms,
    setLoading,
  }
}
