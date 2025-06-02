import "../css/Favorites.css";
import { UseMovieContext } from "../contexts/movieContext";
import MovieCard from "../components/movieCard";

function Favorite() {
  const favorites = UseMovieContext();

  console.log(favorites)
  if (favorites.favorites.length>0) {
    return (
      <div className="favorites">
        <h2>Your Favorites</h2>
        <div className="moviesGrid">
          {favorites.favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="favoriteEmpty">
      <h2>No favorite movies to show</h2>
      <p>start adding movies to your favorites and they will appear here</p>
    </div>
  );
}

export default Favorite;
