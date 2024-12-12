import React, {createContext, useState} from "react";

// creo il contesto
export const MovieContext = createContext()

export default function MovieProvider({ children }) {

    // stato dove memorizzo i film 
    const [movie, setMovie] = useState([])
    // stato per la ricerca query
    const [query, setQuery] = useState('')

    return(
        // Attraverso il vaolre Provider, rendo i sati accessibili da qualsiasi componente che utilizza il contesto.
        <MovieContext.Provider value={{movie, setMovie, query, setQuery}}> 
            {children}    
        </MovieContext.Provider>
    )
}