import Loader from "./Loader/Loader";

export default function UserRoute() {
    return (<Suspense fallback={<Loader />}>

    </Suspense>

    )
}