import { Route, Routes } from "react-router-dom";
import React, { Suspense } from 'react';
import { Loader }  from "./Loader/Loader";
import Home from "pages/Home";
import Movies from "pages/Movies";
import MovieDetails from "pages/MovieDetails";
import  Cast from "pages/Cast";
import SharedLayout from "pages/SharedLayout";
import NotFound from "pages/NotFound";
import Footer from "./Footer";
import Reviews from "pages/Reviews";


export default function UserRoute() {
  return (
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
       <Footer />  
      </Suspense>
  );
};