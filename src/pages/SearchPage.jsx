import React from "react"

export default function SearchPage() {
    return (
        <div className="mt-5">
            <h1>Search for Movies</h1>

            <form className="d-flex my-3">
                <input 
                type="text" 
                className="form-control me-2" 
                placeholder="Enter movie title..." 
                />
                <button type="submit" className="btn btn-primary">
                    Search
                </button>
            </form>
            {/* area risultati */}
            <div id="results"></div>
        </div>
    )
}