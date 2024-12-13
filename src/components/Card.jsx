import React from "react"
import { getFlag } from "../flags/flagMapper"

export default function Card ({ movie }) {
    return (
        <div className="card my-2">
          <div className="card-body">
            <h5 className="card-title">{movie.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{movie.originalTitle}</h6>
            <p className="card-text">
              <strong>Language:</strong> {getFlag(movie.original_language)}
            </p>
            <p className="card-text">
              <strong>Rating:</strong> {movie.vote_avarege}
            </p>
          </div>
        </div>
      )
}