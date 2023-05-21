import { baseUrl, sizeImg } from '../../utils/constants'
import styles from './CardFilms.module.css'
import { Film } from '../../types-d'
import { useState } from 'react'
import genres from '../../mocks/genres.json'
interface Props {
  films: Film[]
}
const CardFilmsComponent: React.FC<Props> = ({ films }) => {
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
  const genre = genres.filter((obj) => currentFilm?.genre_ids?.includes(obj.id))

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  const openDetails = (id: string) => {
    setOpen(!open)
    setCurrentFilm(films.filter((item) => id === item.id)[0])
  }

  return (
    <div className={styles.container}>
      {films?.map((film) => (
        <div onClick={() => openDetails(film.id)} key={film.id}>
          <img
            loading='lazy'
            src={baseUrl + sizeImg + film.image}
            alt={film.title}
            width={300}
          />
          <span className={styles.date}>Estreno: {film.date}</span>
          <h2>{film.title}</h2>
        </div>
      ))}
      {open && (
        <>
          <div className={styles.overlay} onClick={() => setOpen(!open)} />
          <div className={styles.modal}>
            <div className={styles.modalHeader}>
              <img
                loading='lazy'
                src={baseUrl + sizeImg + currentFilm.image}
                alt={currentFilm.title}
                width={185}
                height={278}
              />
              <div>
                <p>Valoraciones:</p>
                <p className={styles.puntuation}>
                  {currentFilm.vote_average} / 10⭐
                </p>
                <p className={styles.numberVotes}>
                  (Nº de votos: {currentFilm.vote_count})
                </p>
                <form action='' onSubmit={handleSubmit}>
                  <input type='number' name='rated' id='rated' />
                  <input type='submit' value='Votar' />
                </form>
              </div>
            </div>
            <p>Titulo: {currentFilm.title}</p>
            <p>Genero: {genre.map((item) => `${item.name}, `)}</p>
            <p>Sinopsis: {currentFilm.overview}</p>
          </div>
        </>
      )}
    </div>
  )
}

export default CardFilmsComponent
