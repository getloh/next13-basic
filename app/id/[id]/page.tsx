import Image from "next/image";
import { MovieDetailResult } from "@/app/interfaces";

export const revalidate = 600;

export default async function MovieDetail({ params })
{
    const { id } = params
    console.log(id)
    const imageBaseUrl = "https://image.tmdb.org/t/p/original"

    const data = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}`)

    const res: MovieDetailResult = await data.json();

    console.log(res)
    return (

        <div className="relative">
            <div className="overflow-hidden">


                <div className="p-8 flex justify-between z-10 relative">
                    <div className="w-1/3">
                        <Image className="" alt={res.title} width={800} height={800} src={imageBaseUrl + res.poster_path}></Image>
                    </div>

                    <div className="w-2/3 ml-8">
                        <h1 className="text-3xl">{res.title}</h1>
                        <p>{res.genres.map((genre, index) => genre.name + (index == res.genres.length - 1 ? "" : ", "))}</p>
                        <p className="text-md">{res.release_date}</p>
                        <p className="text-md">{res.runtime} Minutes</p>
                        <p>Score {res.vote_average}</p>
                        <p className="text-md mb-5 bg-primary-600 inline-block px-3 py-1">{res.status}</p>
                        <p className="text-lg text-primary-100">{res.tagline}</p>
                        <h2 className="py-2">Overview</h2>
                        <p className="text-md">{res.overview}</p>

                        <p className="text-secondary-600 mt-10">{JSON.stringify(res)}</p>
                    </div>
                </div>
                { res.backdrop_path &&
                    <div className="z-0">
                        <Image className="w-full absolute left-0 top-0 opacity-20 z-0" alt={res.title} width={2000} height={2000} src={imageBaseUrl + res.backdrop_path}></Image>
                    </div>
                }
            </div>
        </div>
    )
}