import "../styles/NewsCard.css";
import useFetch from "../utils/helpers/useFetch";

let url =
  "https://gnews.io/api/v4/top-headlines?token=f653d0939e700f61cfb38c810d1d4fa9&lang=en&topic=entertainment&country=us";

export default function NewsCard() {
  const { data, loading, error } = useFetch(url);
  let isDataAvailable = !loading && !error && !!data;

  if (loading) return console.log("loading");
  if (error) return console.log(error);

  
  return isDataAvailable && data.articles.slice(0, 4).map((article) => {
    return (
      <>
        <div className="news-card-container">
          <img src={article.image}></img>

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
