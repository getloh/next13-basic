"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import IconSearch from "./icons/IconSearch"

export default function SearchBar()
{

    const [search, setSearch] = useState()
    const router = useRouter()

    const handleKeypress = (event: React.KeyboardEvent<HTMLInputElement>) =>
    {      // Allows for using 'enter' on keyboard instead of mouseclick on button
        if (event.code === "Enter" || event.code === "NumpadEnter")
        {
            onSearch();
        }
    }

    const onSearch = () =>
    {
        if (search)
        {
            router.push(`/search/${search}`)
        }
    }

    return (
        <div className="w-100 flex h-full relative">
            <input className="w-full bg-secondary-800 rounded-3xl px-5"
                name="searchbar" autoComplete="off" onKeyUp={handleKeypress} id="searchbar" placeholder="Search for a movie" type="text" onChange={(e) => setSearch(e.target.value)} 
                />
            <button name="searchbutton" onClick={onSearch} id="searchbutton" className="absolute right-0 p-3 self-center">
            <IconSearch size={24}/>
            </button>
        </div>
    )
}