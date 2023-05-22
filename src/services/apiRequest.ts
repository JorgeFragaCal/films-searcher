import { INTERNAL_ERROR } from '../translations/es'
import { Film, FilmRaw } from '../types-d'

export const get = (
  url: string,
  callback: (response: { results: FilmRaw[]; status_message: string }) => void,
  errorCallback: (data: string) => void,
  loading: (status: boolean) => void
): void => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
    },
  }
  fetchData(url, options, callback, errorCallback, loading)
}

const fetchData = async (
  url: string,
  options: object,
  callback: (response: { results: FilmRaw[]; status_message: string }) => void,
  errorCallback: (data: string) => void,
  loading: (status: boolean) => void
): Promise<void> => {
  await fetch(url, options)
    .then(async (response) => await response.json())
    .then((response) => callback(response))
    .catch((err) => {
      errorCallback('Ha habido un error interno en la búsqueda')
      throw new Error(err)
    })
    .finally(() => loading(false))
}

export const getSessionServices = (
  url: string,
  callback: (response: {
    status_message: string
    guest_session_id: string
  }) => void,
  errorCallback: (data: string) => void,
  loading: (status: boolean) => void,
  handlePutRated: (response: { guest_session_id: string }) => void
): void => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
    },
  }
  fetchDataSession(
    url,
    options,
    callback,
    errorCallback,
    loading,
    handlePutRated
  )
}
const fetchDataSession = async (
  url: string,
  options: object,
  callback: (response: {
    status_message: string
    guest_session_id: string
  }) => void,
  errorCallback: (data: string) => void,
  loading: (status: boolean) => void,
  handlePutRated: (response: { guest_session_id: string }) => void
): Promise<void> => {
  await fetch(url, options)
    .then(async (response) => await response.json())
    .then((response) => {
      callback(response)
      return response
    })
    .then((response) => handlePutRated(response))
    .catch((err) => {
      errorCallback(INTERNAL_ERROR)
      throw new Error(err)
    })
    .finally(() => loading(false))
}

export const put = (
  url: string,
  callback: (response: { status_message: string }) => void,
  errorCallback: (data: string) => void,
  loading: (status: boolean) => void,
  currentFilm: Film,
  addRated: (currentFilm: Film) => void,
  body: object
): void => {
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(body),
  }
  updateData(
    url,
    options,
    callback,
    errorCallback,
    loading,
    currentFilm,
    addRated
  )
}

const updateData = async (
  url: string,
  options: object,
  callback: (response: { status_message: string }) => void,
  errorCallback: (data: string) => void,
  loading: (status: boolean) => void,
  currentFilm: Film,
  addRated: (currentFilm: Film) => void
) => {
  await fetch(url, options)
    .then(async (response) => await response.json())
    .then((response) => {
      Boolean(response.success) && addRated(currentFilm)
      callback(response)
    })
    .catch((err) => {
      errorCallback(INTERNAL_ERROR)
      throw new Error(err)
    })
    .finally(() => loading(false))
}
