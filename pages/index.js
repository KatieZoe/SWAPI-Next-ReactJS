import Head from 'next/head';
import FilmList from '../components/filmList'

export default function Home({ films }) {
  console.log(films)

  return (
    <div>
      <Head>
        <title> Starwars Fan Site </title>
        <meta name="keywords" content="starwars, sci-fi, fantasy"/>
      </Head>
      <FilmList films={ films }/>
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`https://swapi.dev/api/films/`)
    const films = await res.json()

    return {
      props: {
        films
      }
    }
};
