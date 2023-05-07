import { Outlet, useParams, Link, useLocation} from "react-router-dom";
import { useState, useEffect, Suspense } from "react";
import { getMovieDetails } from "shared/Api/Api";
import { Loader } from "components/Loader/Loader";
import css from "./MovieDetails.module.css";
import noImg from "..//..//img/No-picture-available.png";
import { ButtonBack }  from 'pages/ButtonBack/ButtonBack';


export default function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const location = useLocation();
  const { movieId } = useParams();
  
  useEffect(() => {
    const movieDetails = async () => {
      try {
        setLoading(true);
        setError(null);

        const result = await getMovieDetails(movieId);
        setMovie(result);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    }
    movieDetails();
  }, [movieId])

  const isCastDetails = location.pathname.includes("cast");
  const castLink = isCastDetails ? `/movies/${movieId}` : `/movies/${movieId}/cast`;
  const isReviewDetails = location.pathname.includes("reviews");
  const reviewLink = isReviewDetails ? `/movies/${movieId}` : `/movies/${movieId}/reviews`;
  const from = location.state?.from ?? "/";

  return (
    <div className={css.container}>
       <ButtonBack />
      {loading && <Loader />}
      {error && <p>Something went wrong</p>}
      {movie && (
        <div className={css.movieDetails}>
          <div className={css.boxImg}>
            <img className={css.img} src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : noImg} alt="poster" />
          </div>
          <div className={css.boxInfo}>
            <h2>{movie.title}</h2>
            <p>User Score: {`${(movie.vote_average * 10).toFixed(1)}`}%</p>
            <h3>Overview</h3>
            <p>{`${movie.overview}`}</p>
            <h3>Genres</h3>
            <p>{`${movie.genres.map(genre => genre.name).join(' / ')}`}</p>
            <div className={css.boxAddInfo}>
              <h2>Additional information</h2>
              <Link className={css.castLink} state={{ from }} to={castLink} replace>Cast</Link>
              <Link className={css.reviewLink} state={{ from}} to={reviewLink} replace>Reviews</Link>
            </div>
          </div>
        </div>
      )}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  )
}


/*
const goBack = () => navigate(-1);
const isCastDetails = location.pathname.includes("cast");
const castLink = isCastDetails ? `/movies/${movieId}` : `/movies/${movieId}/cast`;
const isReviewDetails = location.pathname.includes("reviews");
const reviewLink = isReviewDetails ? `/movies/${movieId}` : `/movies/${movieId}/reviews`;

  return (
    <div className={css.container}>
      <button className={css.button} onClick={goBack}>Go back</button>
      {loading && <Loader />}
      {error && <p>Something went wrong</p>}
      {movie && (
      <div className={css.movieDetails}>
          <div className={css.boxImg}>
            <img className={css.img} src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : noImg} alt="poster"/>
          </div>
          <div className={css.boxInfo}>
            <h2>{movie.title}</h2>
            <p>User Score: {`${(movie.vote_average * 10).toFixed(1)}`}%</p>
            <h3>Overview</h3>
            <p>{`${movie.overview}`}</p>
            <h3>Genres</h3>
            <p>{`${movie.genres.map(genre => genre.name).join(' / ')}`}</p>
            <div className={css.boxAddInfo}>
            <h2>Additional information</h2>
            <Link className={css.castLink} state={{from}} to={castLink} replace>Cast</Link>
            <Link className={css.reviewLink} state={{from}} to={reviewLink} replace>Reviews</Link>
          </div>
          </div>
      </div>
      )}
      <Suspense fallback={<Loader />}>
      <Outlet/> 
      </Suspense>
    </div>
  )
} 
*/