
import { NavLink } from "react-router-dom";
import css from "./Header.module.css";

export default function Header() {
    return (
        
        <nav className="css.header" >
            
        <NavLink className= { getClassName } to = "/" end > Home </NavLink>
        <NavLink className= { getClassName } to = "/movies">Movies</NavLink>

        </nav>
        
    )   
}
const getClassName = ({isActive}) => {
    return isActive ? `${css.link} ${css.active}` : `${css.link}`}