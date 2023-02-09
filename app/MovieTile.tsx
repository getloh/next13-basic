import Link from "next/link";
import Image from "next/image";
import IconStar from "./components/icons/IconStar";

export interface MovieTileProps
{
    id: string;
    backdrop: string;
    title: string;
    release: string;
    poster: string;
    vote: number;
}

export default function MovieTile(props: MovieTileProps)
{

    const imageBaseUrl = "https://image.tmdb.org/t/p/original"

    return (
        <Link href={"/id/" + props.id}>
            <div className="flex flex-col justify-start bg-secondary-900" >
                <Image src={imageBaseUrl + props.poster} alt={props.title + " poster"} width={1000} height={1000} className="rounded"/>
                <div className="flex justify-between pt-2 items-center opacity-80 ">
                    <p className="text-xs">{props.release}</p>
                    <div className="flex">
                        <IconStar />
                        <p>{props.vote}</p>
                    </div>

                </div>
                <h2>{props.title}</h2>
            </div>
        </Link>
    )
}