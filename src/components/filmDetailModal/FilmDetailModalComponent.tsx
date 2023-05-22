import styles from './filmDetailModal.module.css'
import {
  baseUrl,
  ratedMovieUrl,
  sessionUrl,
  sizeImg,
} from '../../utils/constants'
import genres from '../../mocks/genres.json'
import { Film } from '../../types-d'
import useFilms from '../../hooks/useFilms'

interface Props {
  currentFilm: Film
  handleOpen: () => void
}
const FilmDetailModalComponent: React.FC<Props> = ({
  currentFilm,
  handleOpen,
}) => {
  const genre = genres.filter((obj) => currentFilm?.genre_ids?.includes(obj.id))

  const { putRated, error, loading, setLoading, getSession } = useFilms()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const rated = 0
    setLoading(true)

    const handlePutRated = (response: { guest_session_id: string }) =>
      putRated(
        ratedMovieUrl(currentFilm.id, response.guest_session_id),
        currentFilm,
        rated
      )

    getSession(sessionUrl, handlePutRated)
  }
  return (
    <>
      <div className={styles.overlay} onClick={handleOpen} />
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <img
            loading='lazy'
            src={baseUrl + sizeImg + currentFilm.image}
            alt={currentFilm.title}
            width={185}
            height={278}
          />
          <div className={styles.ratedContainer}>
            <div>
              <p>Valoraciones:</p>
              <p className={styles.puntuation}>
                {currentFilm.vote_average} / 10⭐
              </p>
              <p className={styles.numberVotes}>
                (Nº de votos: {currentFilm.vote_count})
              </p>
            </div>
            <form action='' onSubmit={handleSubmit}>
              <div className={styles.input}>
                <input type='number' name='rated' id='rated' max={10} min={0} />
                <input
                  type='submit'
                  value={loading ? 'Cargando' : 'Votar'}
                  className={styles.button}
                />
              </div>
              <span className={styles.error}>{error}</span>
              {loading}
            </form>
          </div>
        </div>
        <p>Titulo: {currentFilm.title}</p>
        <p>Genero: {genre.map((item) => `${item.name}, `)}</p>
        <p>Sinopsis: {currentFilm.overview}</p>
      </div>
    </>
  )
}

export default FilmDetailModalComponent
