import styles from './filmDetailModal.module.css'
import {
  baseUrl,
  ratedMovieUrl,
  sessionUrl,
  sizeImg,
} from '../../utils/constants'
import genres from '../../mocks/genres.json'
import { Body, Film } from '../../types-d'
import useFilms from '../../hooks/useFilms'
import {
  GENERO,
  NUMERO_DE_VOTOS,
  SINOPSIS,
  TITULO,
  VALORACIONES,
} from '../../translations/es'

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
    const formData = new FormData(event.currentTarget)

    const body: Body = {}
    for (const pair of formData.entries()) {
      body[pair[0]] = pair[1]
    }
    setLoading(true)

    const handlePutRated = (response: { guest_session_id: string }) =>
      putRated(
        ratedMovieUrl(currentFilm.id, response.guest_session_id),
        currentFilm,
        body
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
              <p>{VALORACIONES}:</p>
              <p className={styles.puntuation}>
                {currentFilm.vote_average} / 10⭐
              </p>
              <p className={styles.numberVotes}>
                ({NUMERO_DE_VOTOS}: {currentFilm.vote_count})
              </p>
            </div>
            <form action='' onSubmit={handleSubmit}>
              <div className={styles.input}>
                <input type='number' name='value' id='rated' max={10} min={0} />
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
        <p>
          {TITULO}: {currentFilm.title}
        </p>
        <p>
          {GENERO}: {genre.map((item) => `${item.name}, `)}
        </p>
        <p>
          {SINOPSIS}: {currentFilm.overview}
        </p>
      </div>
    </>
  )
}

export default FilmDetailModalComponent
