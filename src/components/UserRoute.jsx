import { Loader } from "./Loader/Loader";
import React, { Suspense } from 'react';
import SharedLayout from "pages/SharedLayout/SharedLayout";
import NotFound from "pages/NotFound/NotFound";

export default function UserRoute() {
    return (<Suspense fallback={<Loader />}>
        <Routes>
        <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />}></Route>
        
        <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>

    </Suspense>

    )
}