import { Route, Routes } from "react-router-dom";
import React, { Suspense } from 'react';
import Home from "pages/Home/Home";
import Movies from "pages/Movies/Movies";
import MovieDetails from "pages/MovieDetails/MovieDetails";
import  Cast from "pages/Cast/Cast";
import { Loader }  from "./Loader/Loader";
import SharedLayout from "pages/SharedLayout/SharedLayout";
import NotFound from "pages/NotFound/NotFound";
import Footer from "./Footer/Footer"



/*export default function UserRoute() {
  return (
  <>
    <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />}></Route>
            <Route path="/movies" element={<Movies />}></Route>
            <Route path="/movies/:movieId" element={<MovieDetails />}></Route>
               <Route path="cast" element={<Cast />}></Route>
           
        
        <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
       
    </Suspense>
     <Footer />
  </>
   
    )
}*/

export default function UserRoute() {
  return (
      <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />}></Route>
            
          </Route>
          <Route path="*" element={<NotFound />}></Route>
       
        </Route>     
      </Routes>
      <Footer />  
      </Suspense>
  );
};