import useFetch from "../utils/helpers/useFetch";
import Card from "./Card";
import { apiKey } from "../utils/constants/api-key";
import { baseURL } from "../utils/constants/urls";
import { CircularProgress, Alert } from "@mui/material";

export default function Recommendations(props) {
  let url = `${baseURL}/${props.category}/${props.id}/recommendations?api_key=${apiKey}&language=en-US&page=1`;
  const { data, loading, error } = useFetch(url);
  let isDataAvailable = !loading && !error && !!data;

  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error">{error}</Alert>;

  return (
    isDataAvailable &&
    data.results.slice(0, 6).map((movie) => {
      return (
        <Card
          title={movie.title || movie.original_name}
          overview={movie.overview}
          rating={Math.floor(movie.vote_average * 10)}
          poster={movie.poster_path}
          genre1={movie.genre_ids[0]}
          genre2={movie.genre_ids[1]}
          id={movie.id}
          category={props.link}
          group={props.category}
          key={movie.id}
        />
      );
    })
  );
}
