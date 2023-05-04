import Loader from "./Loader/Loader";
import React, { Suspense } from 'react';

export default function UserRoute() {
    return (<Suspense fallback={<Loader />}>

    </Suspense>

    )
}