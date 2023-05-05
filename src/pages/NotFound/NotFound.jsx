import css from "./NotFound.module.css";
import Img from "..//..//img/masha.gif";

export default function NotFound() {
  return (
    <div className={css.notFound}>
       <p>NotFound</p>
       <img src={Img} alt="poster"  />
     
    </div>
  )
}