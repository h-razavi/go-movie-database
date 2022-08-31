import "../styles/NewsCard.css";
import useFetch from "../utils/helpers/useFetch";
import { CircularProgress, Alert } from "@mui/material";

let url =
  "https://gnews.io/api/v4/top-headlines?token=f653d0939e700f61cfb38c810d1d4fa9&lang=en&topic=entertainment&country=us";

export default function NewsCard() {
  const { data, loading, error } = useFetch(url);
  let isDataAvailable = !loading && !error && !!data;

  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error">{error}</Alert>;

  return (
    isDataAvailable &&
    data.articles.slice(0, 4).map((article) => {
      return (
        <div key={article.publishedAt}>
          <div className="news-card-container">
            <img src={article.image} alt="news"></img>

            <div className="description">
              <h4>
                <a href={article.url}> {article.title}</a>
              </h4>
              <p> {article.description}</p>
            </div>
          </div>
        </div>
      );
    })
  );
}
