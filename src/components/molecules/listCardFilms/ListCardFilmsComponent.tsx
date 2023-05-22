import styles from './ListCardFilms.module.css'
import { Film } from '../../../types-d'
import { useState } from 'react'
import CardFilmComponent from '../../atoms/cardFilm/CardFilmComponent'
import FilmDetailModalComponent from '../../atoms/filmDetailModal/FilmDetailModalComponent'
interface Props {
  films: Film[]
}
const ListCardFilmsComponent: React.FC<Props> = ({ films }) => {
  const [open, setOpen] = useState<boolean>(false)
  const [currentFilm, setCurrentFilm] = useState<Film>({
    id: '',
    image: '',
    title: '',
    date: '',
    overview: '',
    vote_average: 0,
    vote_count: 0,
    genre_ids: [],
  })
  const handleOpen = () => {
    setOpen(!open)
  }
  const handleCurrentFilm = (id: string) => {
    setCurrentFilm(films.filter((item) => id === item.id)[0])
  }

  return (
    <div className={styles.container}>
      {films?.map((film) => (
        <CardFilmComponent
          key={film.id}
          data={film}
          handleOpen={handleOpen}
          handleCurrentFilm={handleCurrentFilm}
        />
      ))}
      {open && (
        <FilmDetailModalComponent
          currentFilm={currentFilm}
          handleOpen={handleOpen}
        />
      )}
    </div>
  )
}

export default ListCardFilmsComponent
