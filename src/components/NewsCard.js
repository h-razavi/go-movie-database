import "../styles/NewsCard.css";
import useFetch from "../utils/helpers/useFetch";

let url =
  "https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=a0c951117e7d472dbf5ac4f6e41c1c5f";

export default function NewsCard() {
  const { data, loading, error } = useFetch(url);
  let isDataAvailable = !loading && !error && !!data;

  if (loading) return console.log("loading");
  if (error) return console.log(error);

  
  return isDataAvailable && data.articles.slice(0, 4).map((article) => {
    return (
      <>
        <div className="news-card-container">
          <img src={article.urlToImage}></img>

          <div className="description">
            <h4>
              {" "}
              <a href={article.url}> {article.title}</a>
            </h4>
            <p> {article.description}</p>
          </div>
        </div>
      </>
    );
  });
}
