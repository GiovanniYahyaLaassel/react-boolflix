import React, { useContext } from "react"
import { MovieContext } from "../context/MovieContext"


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
                <div key={movie.id} className="card my-2">
                    <div className="card-body">
                        <h5 className="card-title">{movie.title}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">
                        {movie.original_title}
                        </h6>
                        <p className="card-text">
                            <strong>Language:</strong> {movie.original_language}
                        </p>
                        <p className="card-text">
                            <strong>Rating:</strong> {movie.vote_average}
                        </p>
                    </div>
                </div>
      ))}
            </div>    
    
        </div>
    )
}