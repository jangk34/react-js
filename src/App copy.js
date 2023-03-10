//import Button from "./Button";
//import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.jsonminimum_rating=8.8&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies()
  }, []);
  console.log(movies);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <div key={movie.id}>
              <img src={movie.medium_cover_image}/>
              <h2>{movie.title}</h2>
              <p>{movie.summery}</p>
              <ul>
                {movie.genres.map((g) => (
                <li key={g}>{g}</li>
                ))}
              </ul>

            </div>
          ))}
        </div>
      )}
    </div>
  );
}
// map은 리스트에 있는것들을 화면에 보이도록  ex) [1,2,3,4,5,6].map( x => x*2)             x는 각 item
export default App;