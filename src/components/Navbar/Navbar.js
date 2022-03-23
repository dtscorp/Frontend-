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
            <li className={Style.navbar__item}>Home</li>
            <li className={Style.navbar__item}>Add Movie</li>
            <li className={Style.navbar__item}>Popular</li>
            <li className={Style.navbar__item}>Now Playing</li>
            <li className={Style.navbar__item}>Top Rated</li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
