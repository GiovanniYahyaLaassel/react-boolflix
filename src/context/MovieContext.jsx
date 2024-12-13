import React, {createContext, useState} from "react";
import { Await } from "react-router-dom";

// creo il contesto
export const MovieContext = createContext()

export default function MovieProvider({ children }) {

    // stato dove memorizzo i film 
    const [movies, setMovie] = useState([])
    // stato per la ricerca query
    const [query, setQuery] = useState('')
    //stato caricamento
    const [isLoading, setIsLoading] = useState(false)
    //stato errori
    const [error, setError] = useState(null)

    // Funzione per normalizzare i dati
    const normalizeMediaData = (mediaArray) => {
        return mediaArray.map((item) => ({
            id: item.id,
            title: item.title || item.name, // titolo per film e serie
            originalTitle: item.original_title || item.orginal_name,
            language: item.original_language,
            rating: item.vote_average,
        }))
    }

    // Funzione per cercare i film  
    const searchMovies = async (searchQuery) => {
        if (!searchQuery) return;
      
        setIsLoading(true);
        setError(null);
      
        try {
          const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${searchQuery}&api_key=a4e56daa6e97ba82389a3f2b7838eac4`);
          const data = await response.json();


      
          if (data.results) {
            const normalizedData = normalizeMediaData(data.results)
            setMovie(normalizedData);
            console.log("Film normalizzati e salvati nello stato:", normalizedData); // Log dei dati salvati
          } else {
            setError("No movies found.");
          }
        } catch (err) {
          console.error("Errore nella chiamata API:", err.message); 
          setError("Failed to fetch movies.");
        } finally {
          setIsLoading(false);
        }
      };
    
        return (
            // Attraverso il vaolre Provider, rendo i sati accessibili da qualsiasi componente che utilizza il contesto.
            <MovieContext.Provider value={{movies, setMovie, query, setQuery, isLoading, error, searchMovies}}> 
                {children}    
            </MovieContext.Provider>
    )
}