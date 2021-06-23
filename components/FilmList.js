import Film from './Film'
import filmStyles from '../styles/Films.module.css';


const FilmList = ({ films }) => {
  return(
    <div className={ filmStyles.grid }>
      { films.results.map((film) => (
        <Film film={ film } />
      )) }
    </div>
  )
}
export default FilmList;
