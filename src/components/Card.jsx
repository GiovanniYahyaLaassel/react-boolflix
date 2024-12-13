import React from "react"

export default function Card ({title, originalTitle, language, rating}) {
    return (
        <div className="card my-2">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{originalTitle}</h6>
            <p className="card-text">
              <strong>Language:</strong> {language}
            </p>
            <p className="card-text">
              <strong>Rating:</strong> {rating}
            </p>
          </div>
        </div>
      )
}