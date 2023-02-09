import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import MovieTile from '@/app/MovieTile'
import { MovieResult } from '@/app/interfaces'
import { MovieDetailResult } from '@/app/interfaces'
import { MovieDBResponse } from '@/app/interfaces'

const inter = Inter({ subsets: ['latin'] })

export default async function SearchPage({params}) {

  const { searchterm } = params
  const imageBaseUrl = "https://image.tmdb.org/t/p/original"

  const data = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&language=en-US&query=${searchterm}`)
  
  const res: MovieDBResponse = await data.json();

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
