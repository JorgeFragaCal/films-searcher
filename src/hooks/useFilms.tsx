import { useState } from 'react'
import { get, put, getSessionServices } from '../services/apiRequest'
import { Film, FilmRaw } from '../types-d'
import { useFilmsStore } from '../store/filmsRated'

export default function useFilms() {
  const [data, setData] = useState<FilmRaw[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')
  const addRated = useFilmsStore((state) => state.addRated)

  const callback = (response: {
    results: FilmRaw[]
    status_message: string
  }) => {
    setData(response.results)
    setError(response.status_message)
    setLoading(false)
  }

  const sessionCallback = (response: {
    status_message: string
  }) => {
    setError(response.status_message)
    setLoading(false)
  }

  const ratedCallback = (response: { status_message: string }) => {
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

  const getSession = (
    url: string,
    handlePutRated: (response: { guest_session_id: string }) => void
  ) => {
    getSessionServices(
      url,
      sessionCallback,
      errorCallback,
      isLoading,
      handlePutRated
    )
  }

  const putRated = (url: string, currentFilm: Film, rated: number) => {
    const body = {
      puntuation: rated,
    }
    put(
      url,
      ratedCallback,
      errorCallback,
      isLoading,
      currentFilm,
      addRated,
      body
    )
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
    putRated,
    setLoading,
    getSession,
  }
}
