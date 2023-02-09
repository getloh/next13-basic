import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import MovieTile from './MovieTile'
import { MovieResult } from './interfaces'

const inter = Inter({ subsets: ['latin'] })

export default async function Home() {

  const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)

  const res: {results : MovieResult[]} = await data.json();

  console.log(res)

  return (
    <main>
      <div className="p-10">
        <h1>Main page</h1>

        <div className="grid gap-10 grid-cols-fluid">

        {res.results.map((movie) => 
        <MovieTile
        key={movie.id}
        id={movie.id}
        backdrop={movie.backdrop_path}
        title={movie.title}
        release={movie.release_date}
        poster={movie.poster_path}
        vote={movie.vote_average}
        >

        </MovieTile>)}

          </div>
      </div>

    </main>
  )
}
