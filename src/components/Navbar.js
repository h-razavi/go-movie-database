import { NavbarStyled, NavItem, NavMobile } from "../styles/NavbarStyled";
import logo from "../assets/logos/logo-header-without-bg.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <NavbarStyled>
        <div className="nav-left">
          <a href="/">
            <img src={logo} height="64px" alt="logo" />
          </a>
          <nav>
            <NavItem>
              <Link to={"/movies"}>Movies</Link>
            </NavItem>
            <NavItem>
              <Link to={"/tv"}>TV</Link>
            </NavItem>
          </nav>
        </div>
      </NavbarStyled>
      <NavMobile>
        <Link to={"/movies"}>
          <div className="nav-mobile">Movies</div>
        </Link>
        <Link to={"/tv"}>
          <div className="nav-mobile">TV</div>
        </Link>
      </NavMobile>
    </>
  );
}
