import { FilmRaw } from "../types-d";

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
export const put = (
  url: string,
  callback: (response: { results: FilmRaw[]; status_message: string }) => void,
  errorCallback: (data: string) => void,
  loading: (status: boolean) => void
): void => {
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json;charset=utf-8',
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
) =>
  await fetch(url, options)
    .then(async (response) => await response.json())
    .then((response) => callback(response))
    .catch((err) => {
      errorCallback('Ha habido un error interno en la busqueda')
      throw new Error(err)
    })
    .finally(() => loading(false))
