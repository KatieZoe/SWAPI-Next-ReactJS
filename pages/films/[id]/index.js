import Link from 'next/link'
import filmStyles from '/styles/Films.module.css'
import Character from '/components/Character'

const FilmPage = ({ film, characters }) => {
  console.log(characters);
    let id = film.url[film.url.length -2]





  return(
    <div className={ filmStyles.profile }>
      <h3> Film: {film.title} </h3>
      <h4> Star Wars Episode No. {film.episode_id} </h4>
      <br/>
      <ul>
      { characters.results.map((c) => (
        <Character key={c.url} character={c} filmID={id}/> ))}
      </ul>
      <p><span>Director: </span> {film.director}</p>
      <p><span>Producers:</span> {film.producer} </p>
      <p> <span> Opening story: </span> <br/>
      {film.opening_crawl}
      </p>

      <br/>
      <Link href='/'> Go back </Link>
    </div>
  )
}


export const getServerSideProps = async (context) => {
  const resFilms = await fetch(`https://swapi.dev/api/films/${context.params.id}/`)
  const film = await resFilms.json()
  const resCharacters = await fetch(`https://swapi.dev/api/people/`)
  const characters = await resCharacters.json()



  return {
    props: {
      film,
      characters
    }
  }
}


export default FilmPage

//
// filter((val) => {
//   if (){
//     return val
//   } else {
//     return val
//   }
// })
