import React from "react"
import { getFlagUrl } from "../flags/flagMapper"
import styles from "./Card.module.css" 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons"
import {faStar as regularStar} from "@fortawesome/free-regular-svg-icons"

export default function Card ({ movie }) {
  // console.log("Dati ricevuti nel componente Card:", movie);
  // console.log(movie.vote_avarege)
  // funzione per traformare il voto in stelle 
  const getStars = (rating) => {
    const starsCount = Math.ceil(rating / 2)
    const fullStars = Array(starsCount).fill(1)     // stelle piene
    const emptyStars = Array(5 - starsCount).fill(0) // stelle vuote
    return [...fullStars, ...emptyStars];
  }
 
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
              <strong>Rating:</strong> {""}
              {getStars(movie.rating).map((star, index) => (
                <FontAwesomeIcon
                  key={index}
                  icon={star ? solidStar : regularStar} // Stella piena o vuota
                  style={{ color: "#FFD700", marginRight: "4px" }} 
                />
              ))}
            </p>
            <p className="card-text">
              <strong>Type:</strong> {movie.type === "movie" ? "Film" : "Serie TV"}
            </p>
          </div>
        </div>        
      )      
}
