import {NavbarStyled,NavItem, NavMobile} from "../styles/NavbarStyled";
import logo from "../assets/logos/logo-header-without-bg.png"
import pfp from "../assets/img/default-pfp.png"


export default function Navbar (){
    return (
        <>
        <NavbarStyled>
            <div className="nav-left">
            <a href="/"><img src={logo} height='64px' alt="logo"/></a>
            <nav>
            <NavItem>Movies</NavItem>
            <NavItem>TV</NavItem>
            </nav>
            </div>
            <div className="nav-right">
                <img src={pfp} height="36px"/>
            </div>
        </NavbarStyled>
        <NavMobile>
            <div className="nav-mobile">Movies</div>
            <div className="nav-mobile">TV</div>
        </NavMobile>

        
        </>
        
    )

}