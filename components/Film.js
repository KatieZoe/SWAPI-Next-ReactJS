import Link from 'next/link'
import filmStyles from '../styles/Films.module.css'


const Film = ({ film }) => {
  let id = film.url[film.url.length -2];
  // console.log(id)

  return (
    <Link href='/films/[id]/' as={ `/films/${ id }/` }>
      <a>
        <h3> { film.title } &rarr; </h3>
      </a>
    </Link>
  )
}
export default Film
