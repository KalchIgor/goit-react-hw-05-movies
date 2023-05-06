import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Loader } from "./Loader/Loader";
import Container from './Container';
import Movies from "pages/Movies";
import Footer from "./Footer";

//import Home from "pages/Home";
const Home = lazy(() => import("pages/Home"));

//import MovieDetails from "pages/MovieDetails";
const MovieDetails = lazy(() => import("pages/MovieDetails"));

//import Cast from "pages/Cast";
const Cast = lazy(() => import("pages/Cast"));

//import SharedLayout from "pages/SharedLayout";
const SharedLayout = lazy(() => import("pages/SharedLayout"));

//import NotFound from "pages/NotFound";
const NotFound = lazy(() => import("pages/NotFound"));

//import Reviews from "pages/Reviews";
const Reviews = lazy(() => import("pages/Reviews"));


export default function UserRoute() {
  return (
    <Container>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />}></Route>
            <Route path="/movies" element={<Movies />}></Route>
            <Route path="/movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />}></Route>
              <Route path="reviews" element={<Reviews />}></Route>
            </Route>
            <Route path="*" element={<NotFound />}></Route>
          </Route>
        </Routes>
      </Suspense>
      <Footer />
    </Container>
  );
};