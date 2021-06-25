import Film from './Film'
import { useState } from 'react'
import filmStyles from '../styles/Films.module.css';


const FilmList = ({ films }) => {
  // console.log(films)
  const [searchTerm, setSearchTerm] = useState('')


  return(
    <div>
    <input className={filmStyles.SearchBar} type='text' placeholder="Search films..." onChange={ event => (setSearchTerm(event.target.value))}/>
    <br/>
    <br/>
      { films.results.filter((val) => {
        if (searchTerm == ''){
          return val
        } else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
          return val
        }
      }).map((film, index) => (
        <Film key={ index } film={ film } />
      )) }
    </div>
  )
}
export default FilmList;
