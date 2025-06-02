import "../css/MovieCard.css"
import { UseMovieContext } from "../contexts/movieContext";

export default function MovieCard({ movie }) {
  const {addToFavorites, removeFromFavorites, isFavorite} = UseMovieContext()
  const favorite = isFavorite(movie.id)

  function LikeButton(e) {
    e.preventDefault()
    if (favorite) removeFromFavorites(movie.id)
      else addToFavorites(movie)
  }

  return (
    <div className="movieCard">
      <div className="moviePoster">
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        <div className="movieOverlay">
          <button className={`favoriteBtn ${favorite ? "active" : ""}`} onClick={LikeButton}>
            ♥
          </button>
        </div>
      </div>
      <div className="movieInfo">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split("-")[0]}</p>
      </div>
    </div>
  );
}
