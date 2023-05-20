import { FILM_DETAIL } from '../../router/router'
import { baseUrl, sizeImg } from '../../utils/constants'
import styles from './CardFilms.module.css'
import { Film } from '../../types-d'
interface Props {
  films: Film[]
}
const CardFilmsComponent: React.FC<Props> = ({ films }) => {
  return (
    <div className={styles.container}>
      {films?.map((film) => (
        <a href={FILM_DETAIL + film.id} key={film.id}>
          <img src={baseUrl + sizeImg + film.image} alt={film.title} />
          <span className={styles.date}>Estreno: {film.date}</span>
          <h2>{film.title}</h2>
        </a>
      ))}
    </div>
  )
}

export default CardFilmsComponent
