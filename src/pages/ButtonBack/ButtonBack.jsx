import {useLocation, Link } from "react-router-dom";
import css from "./ButtonBack.module.css";

export const ButtonBack=()=> {
    const location=useLocation();
    const backLink=location.state?.from ?? '/';

    return (<div>
        <Link to={backLink} className={css.link} state={location.state?.from ?? "/"} >
         <span>Go back</span>
        </Link>
           </div>)
};
  

