import "../styles/Footer.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import logo from "../assets/logos/tmdb.svg";

export default function Footer() {
  return (
    <footer className="container">
      <div className="tmdb">
        Data Provided by{" "}
        <a href="https://www.themoviedb.org/">
          <img src={logo} alt='logo' />
        </a>
      </div>
      <div className="personal-info">
        Designed &amp; Developed by{" "}
        <a href="mailto:hossain.razavi@gmail.com">Hossain Razavi</a>
        <a href="https://github.com/h-razavi">
          <GitHubIcon />
        </a>
      </div>
    </footer>
  );
}
