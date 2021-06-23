import Link from 'next/link'
import { useRouter } from 'next/router'

const FilmPage = ({ film }) => {
  const router = useRouter()
  const {id} = router.query
  return(
    <>
  <h1> {film.title} - Starwars Episode  No. {film.episode_id}  </h1>
  <Link href='/'> Go back </Link>
    </>
  )
}

export const getStaticProps = async (context) => {
  const res = await fetch(`https://swapi.dev/api/films/${context.params.id}/`)

  const film = await res.json()

  return {
    props: {
      film
    }
  }
}


export const getStaticPaths = async () => {
  const res = await fetch(`https://swapi.dev/api/films/`)

  const films = await res.json()
  const ids = films.results.map(film => film.episode_id )
  const paths = ids.map(id => ({ params: {id: id.toString()} }) )

  return {
    paths,
    fallback: false
  }
}

export default FilmPage
