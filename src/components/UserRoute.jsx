import { Route, Routes } from "react-router-dom";
import React, { Suspense } from 'react';
import Home from "pages/Home/Home";
import { Loader } from "./Loader/Loader";
import SharedLayout from "pages/SharedLayout/SharedLayout";
import NotFound from "pages/NotFound/NotFound";
import  Footer  from "./Footer/Footer"

export default function UserRoute() {
  return (
  <>
    <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />}></Route>
        
        <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
       
    </Suspense>
     <Footer />
  </>
   
    )
}