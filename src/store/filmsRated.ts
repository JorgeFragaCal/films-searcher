import { create } from 'zustand'
import { Film } from '../types-d'
import { persist } from 'zustand/middleware'

interface FilmState {
  filmsRated: Film[]
  addRated: (film: Film) => void
}
export const useFilmsStore = create<FilmState>()(
  persist(
    (set) => ({
      filmsRated: [],
      addRated: (film) =>
        set((state) => {
          const isRated = state.filmsRated.find((item) => item.id === film.id)
          if (isRated === undefined) {
            return { filmsRated: [...state.filmsRated, film] }
          } else return { filmsRated: state.filmsRated }
        }),
    }),
    { name: 'rated-films' }
  )
)
