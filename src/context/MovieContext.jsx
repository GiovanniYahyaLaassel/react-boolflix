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

    const imageBaseUrl = "https://image.tmdb.org/t/p/";
    const imageSize = 'w342';

    // Funzione per normalizzare i dati
    const normalizeMediaData = (mediaArray, type) => {
      const normalized = mediaArray.map((item) => ({
          id: item.id,
          title: item.title || item.name, //title per film , name per le serie
          originalTitle: item.original_title || item.original_name,  
          original_language: item.original_language,
          rating: item.vote_average,
          type: type,
          poster: item.poster_path ? `${imageBaseUrl}${imageSize}${item.poster_path}`: null, //genero l'url completo
      }));
      console.log("Dati normalizzati:", normalized);
      return normalized;
  };

    // Funzione per cercare i film  e serire tv
    const searchMovies = async (searchQuery) => {
        if (!searchQuery) return; 
      
        setIsLoading(true);
        setError(null);
      
        try {
          // Chiamata API per i film
          const movieResponse = await fetch(
          `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&api_key=a4e56daa6e97ba82389a3f2b7838eac4&language=it_IT`);
          const movieData = await movieResponse.json();

          
          // Chiamata API per le serie TV
          const tvResponse = await fetch(
          `https://api.themoviedb.org/3/search/tv?query=${searchQuery}&api_key=a4e56daa6e97ba82389a3f2b7838eac4&language=it_IT`);
          const tvData = await tvResponse.json();

          // Normalizzo i dati di entrambi
          const normalizedMovies = normalizeMediaData(movieData.results || [], "movie");
          const normalizedTVShows = normalizeMediaData(tvData.results || [], "tv");

          // Unisco i risultati
            setMovie([...normalizedMovies, ...normalizedTVShows]);

            console.log("Media normalizzati e salvati nello stato:", [
              ...normalizedMovies,
              ...normalizedTVShows,
            ]);
            
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