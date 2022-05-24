import { Link } from "react-router-dom";
import Style from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={Style.container}>
      <nav className={Style.navbar}>
        <div>
          <h1 className={Style.navbar__brand}>Movie App</h1>
        </div>
        <div>
          <ul className={Style.navbar__list}>
            <li className={Style.navbar__item}>
              <Link className={Style.navbar__link} to="/">
                Home
              </Link>
            </li>
            <li className={Style.navbar__item}>
              <Link className={Style.navbar__link} to="/movie/create">
                Add Movie
              </Link>
            </li>
            <li className={Style.navbar__item}>
              <Link className={Style.navbar__link} to="/movie/popular">
                Popular
              </Link>
            </li>
            <li className={Style.navbar__item}>
              <Link className={Style.navbar__link} to="/movie/now">
                Now Playing
              </Link>
            </li>
            <li className={Style.navbar__item}>
              <Link className={Style.navbar__link} to="/movie/top">
                Top Rated
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
