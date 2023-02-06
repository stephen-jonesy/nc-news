import { useContext } from "react";
import { useEffect } from "react";
import { ArticlesContext } from "../articlesContext";
import { getArticlesAPI } from "../utils/api";
import ArticleCards from "./ArticleCard";

function Articles() {
    const {articles, setArticles} = useContext(ArticlesContext)

    useEffect(() => {
        getArticlesAPI()
        .then((articles) => {
            setArticles(articles);

        })
        
    }, []);

    return ( 
        <section className="articles container mt-2">
            <h2>articles</h2>
            <div className="row g-3">
                {
                    articles.map((article => {
                       return <ArticleCards key={article.article_id} article={article}/>
                       
                    }))
                }
            </div>

        </section>
     );
}

export default Articles;