import React, { useContext } from "react"
import { MovieContext } from "../context/MovieContext"
import Card from "../components/Card"


export default function SearchPage() {
    //utilizzo il contesto
    const { query, setQuery, searchMovies, isLoading, movies, error } = useContext(MovieContext)
        //  console.log('query attuale:', query)

    return (
        <div className="mt-5">
            <h1>Search for Movies</h1>

            <form 
                className="d-flex my-3"
                onSubmit={(e) => {
                    e.preventDefault()
                    console.log('effetuare ricerca:', query)
                    searchMovies(query)
                }}
            >

                <input 
                type="text" 
                className="form-control me-2" 
                placeholder="Enter movie title..." 
                value={query}
                onChange={(e) => setQuery(e.target.value)}  //aggiorno la query
                />
                <button type="submit" className="btn btn-primary" disabled={isLoading}>
                    {isLoading ? 'Searching...' : 'Search'}
                </button>
            </form>
            {error && <p className="text-danger">{error}</p>}


            {/* area risultati */}
            <div id="results">
             {movies.map((movie) => (
                <Card
                    key={movie.id}
                    title={movie.title}
                    originalTitle={movie.original_title}
                    language={movie.original_language}
                    rating={movie.vote_average}
                />
                ))}
             
            </div>    
        </div>
    )
}
     
     