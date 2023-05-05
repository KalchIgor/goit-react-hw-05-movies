import { getMovieCast } from "shared/Api/Api"; 
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "components/Loader/Loader";
import noImg from "..//..//img/No-photo-cast.png";
import css from "./Cast.module.css";

export default function Cast() {
  const [cast, setCast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  
  useEffect(() => {
    const getCast = async () => {
      try {
          setLoading(true);
          const { cast } = await getMovieCast(movieId);
          setCast(cast);
      } catch (e) {
          setError(e);
      } finally {
          setLoading(false);
      }
    }
    getCast();
  }, [movieId]);


return (
  <div className={css.castInfo}>
    {loading && <Loader />}
    {error && <p>Something wrong</p>} 
    <ul className={css.castList}>
        {cast && cast.map(({ id, profile_path, name, character }) => (
            <li className={css.castLink} key={id}>
                <div>
                <img className={css.castImg} src={profile_path ? `https://image.tmdb.org/t/p/w500${profile_path}` : noImg}
                alt={name}
                width="100"
                height=""
                />
                </div>
                <div>
                <p className={css.castName}>{name}</p>
                <p>Character: {character}</p>
                </div>
            </li>
        ))}
    </ul>
    </div>
    )
  }
