import { useState, useEffect } from "react";
import { getTrendingMovies } from "../../shared/Api/Api";
//import {useLocation } from "react-router-dom";
import MovieList from 'components/MovieList/MovieList';
import css from "./Home.module.css";


export default function Home() {

const [movies, setMovies] = useState([]);


useEffect(() => {
    const getMovies = async () => {
        const { results } = await getTrendingMovies();

        setMovies(results);
    };

    getMovies();
}, []);
    return (
        <div className={css.container__home}>
        <h1 className={css.title}>Tranding today</h1>
        <MovieList movies={movies}></MovieList>
        </div>
    )
}