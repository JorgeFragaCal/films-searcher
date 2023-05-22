import { ESTRENO } from '../../translations/es'
import { Film } from '../../types-d'
import { baseUrl, sizeImg } from '../../utils/constants'
import styles from './CardFilmComponent.module.css'
interface Props {
  data: Film
  handleOpen: () => void
  handleCurrentFilm: (id: string) => void
}
const CardFilmComponent: React.FC<Props> = ({
  data,
  handleOpen,
  handleCurrentFilm,
}) => {
  const openDetails = (id: string) => {
    handleOpen()
    handleCurrentFilm(id)
  }
  return (
    <div onClick={() => openDetails(data.id)} className={styles.container}>
      <img
        loading='lazy'
        src={baseUrl + sizeImg + data.image}
        alt={data.title}
        width="100%"
      />
      <span className={styles.date}>{ESTRENO}: {data.date}</span>
      <h2>{data.title}</h2>
    </div>
  )
}

export default CardFilmComponent
