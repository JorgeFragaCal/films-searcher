import styles from './filmDetailModal.module.css'
import { baseUrl, sizeImg } from '../../utils/constants'
import genres from '../../mocks/genres.json'
import { useFilmsStore } from '../../store/filmsRated'
import { Film } from '../../types-d'

interface Props {
  currentFilm: Film
  handleOpen: () => void
}
const FilmDetailModalComponent: React.FC<Props> = ({
  currentFilm,
  handleOpen,
}) => {
  const genre = genres.filter((obj) => currentFilm?.genre_ids?.includes(obj.id))
  const addRated = useFilmsStore((state) => state.addRated)
  const filmsRated = useFilmsStore((state) => state.filmsRated)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    addRated(currentFilm)
    console.log(filmsRated)

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
  )
}

export default FilmDetailModalComponent
