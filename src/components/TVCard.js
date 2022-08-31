import { CardStyled } from "../styles/CardStyled";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Genre from "./Genre";
import { Link } from "react-router-dom";
import noPoster from "../assets/img/no-poster.png";
import { posterBasePath } from "../utils/constants/urls";

function TVCard(props) {
  return (
    <>
      <CardStyled>
        <span className="card-title">
          {" "}
          {props.name} {props.year}
        </span>
        <Link to={`/tv/${props.id}`}>
          <div className="img-container">
            <img
              src={props.poster ? posterBasePath + props.poster : noPoster}
              height="300px"
              width="200px"
              alt="poster"
            />
            <div className="card-info">
              <h4>Overview</h4>
              <p>{props.overview}</p>
              <div className="genres">
                <Genre id={props.genre1} group={props.group} />
                <Genre id={props.genre2} group={props.group} />
              </div>
            </div>
          </div>
        </Link>
        <span className="card-bottom">
          <CircularProgressbar value={props.rating} text={props.rating + "%"} />
        </span>
      </CardStyled>
    </>
  );
}

export default TVCard;
