import NewsCard from "./NewsCard";



export default function NewsSection(){

    return (
        <section style={{marginBottom:'100px'}}>
        <div className="dashes"><div className="dash dash1"></div><div className="dash dash2"></div><div className="dash dash3"></div><div className="dash dash4"></div></div>
        <h3>Entertainment News</h3>
        <section className="news">
        <NewsCard />
        </section>
        </section>
    )
    
}

