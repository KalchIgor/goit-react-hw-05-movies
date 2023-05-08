import { Link, useLocation } from 'react-router-dom';
import css from './MovieList.module.css';
import noImg from "..//..//img/No-picture-available.png";

const MovieList = ({ movies }) => {
  const location = useLocation();
    return (<>
          <ul className={css.list}>
        {movies &&
            movies.map(
            ({id, title, poster_path}) => (            
                <li className={css.link} key={id} id={id}>
                    <Link to={{
                        pathname: `/movies/${`${id}`}`,
                        state: {
                        from: { location},
                        },
                    }}
                    >
                    <img className={css.img} src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` :  noImg} alt="poster"/>
                    <p className={css.filmName}>{title}</p>
                    </Link>
                </li>           
            )
        )}
        </ul>
    </>   
  );
};


export default MovieList;


//'https://sd.keepcalms.com/i-w600/keep-calm-poster-not-found.jpg'