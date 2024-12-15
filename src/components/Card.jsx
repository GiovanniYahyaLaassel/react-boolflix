import React from "react"
import { getFlagUrl } from "../flags/flagMapper";
import styles from "./Card.module.css"; 

export default function Card ({ movie }) {
  console.log("Dati ricevuti nel componente Card:", movie);
  console.log(movie.vote_avarege)
 
    return (
      
        <div className="card my-2">
              {/* mostro la copertina */}
              {movie.poster && (
              <img
                src={movie.poster}
                alt={movie.title}
                className={styles["card-image"]} 
                />
          )}

          <div className="card-body">
            <h5 className="card-title">{movie.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{movie.originalTitle}</h6>
            <p className="card-text" >
                <strong>Language:</strong>
                <img
                 src={getFlagUrl(movie.original_language)}
                 alt={`${movie.original_language} flag`}
                 className={styles.flag} 
                />

            </p>
            <p className="card-text">
              <strong>Rating:</strong> {movie.rating}
            </p>
            <p className="card-text">
              <strong>Type:</strong> {movie.type === "movie" ? "Film" : "Serie TV"}
            </p>
          </div>
        </div>        
      )      
}
