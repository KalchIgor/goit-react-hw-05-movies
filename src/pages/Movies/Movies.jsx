import { useState, useEffect } from 'react';
import { searchMovies } from '../../shared/Api/Api';
import { useLocation, useNavigate } from 'react-router-dom';
import MovieList from 'components/MovieList/MovieList';
import css from "./Movies.module.css";

export default function Movies() {
const [searchMovie, setSearchMovie] = useState('');
const [movies, setMovies] = useState([]);

const location = useLocation();
const history = useNavigate();

useEffect(() => {
    const searchString = new URLSearchParams(location.search).get('query');

    if (searchString) {
        const getMovies = async () => {
            const { results } = await searchMovies(searchString);

            setMovies(results);
            setSearchMovie(searchString);

        };

        getMovies();
    }
}, [location.search]);

const handleSubmit = async e => {
    e.preventDefault();

    if (searchMovie.trim()) {
        const { results } = await searchMovies(searchMovie);

        setMovies(results);
        setSearchMovie('');

        if (results.length === 0) {
            window.alert ('We have not such films');
        }

        history({
            ...location,
            search: `query=${searchMovie}`,
        });
    }
};

return (
    <>
        <header>
            <form className={css.searchForm} onSubmit={handleSubmit}>
            <input
                onChange={e => setSearchMovie(e.target.value)}
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search movie"
                value={searchMovie}
                className={css.searchInput}
            />
            <button className={css.searchButton} type="submit">
            &#128269;
            </button>
            </form>
        </header>
        <MovieList movies={movies}></MovieList>
    </>
);
};