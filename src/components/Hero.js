import "../styles/Hero.css";
import logo from "../assets/logos/logo-square2.png";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import MovieIcon from "@mui/icons-material/Movie";
import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import ConnectedTvIcon from "@mui/icons-material/ConnectedTv";
import GroupWorkIcon from "@mui/icons-material/GroupWork";

function Hero() {
  return (
    <section className="hero-container">
      <div className="hero-left">
        <div className="icons">
          <span className="icon1">
            <LocalMoviesIcon style={{ fontSize: 120 }} />
          </span>
          <span className="icon2">
            <MovieIcon style={{ fontSize: 120 }} />
          </span>
          <span className="icon3">
            <TheaterComedyIcon style={{ fontSize: 120 }} />
          </span>
          <span className="icon4">
            <LiveTvIcon style={{ fontSize: 120 }} />
          </span>
          <span className="icon5">
            <ConnectedTvIcon style={{ fontSize: 120 }} />
          </span>
          <span className="icon6">
            <GroupWorkIcon style={{ fontSize: 120 }} />
          </span>
        </div>
      </div>
      <div className="hero-right">
        <img src={logo} height="180px" />
        <div className="logo-text">
          <span>Go!</span>
          <br /> Movie Database
        </div>
        <q>
          All you need to know about your favorite Movies and TV in one place
        </q>
      </div>
    </section>
  );
}

export default Hero;
