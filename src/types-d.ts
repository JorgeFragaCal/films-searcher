export interface Film {
  id: string
  image: string
  title: string
  date: string
  overview: string
  vote_average: number
  vote_count: number
  genre_ids: number[]
}
export interface FilmRaw {
  id: string
  original_title: string
  poster_path: string
  release_date: string
  overview: string
  vote_average: number
  vote_count: number
  genre_ids: number[]
}

export interface Api {
  url: string
  callback: (response: { results: object[]; status_message: string }) => void
  errorCallback: (data: string) => void
  loading: (status: boolean) => void
}
