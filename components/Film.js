import Link from 'next/link'
import filmStyles from '../styles/Films.module.css'


const Film = ({ film }) => {
  return (
    <Link href='/film/[id]' as={ `film/${ film.episode_id}` }>
      <a className={ filmStyles.card }>
        <h3> { film.title } &rarr; </h3>
          <p> More info coming soon... </p>
      </a>
    </Link>
  )
}
export default Film
