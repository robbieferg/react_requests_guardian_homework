import { useState, useEffect } from "react";
import ArticleList from "../components/ArticleList";

const ArticleContainer = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        getArticles();
    }, []);

    const getArticles = () => {
        fetch("https://content.guardianapis.com/search?q=brexit&format=json&api-key=test")
        .then(results => results.json())
        .then(data => setArticles(data["response"]["results"]));
    };

    return (
        <>
            <ArticleList articles={articles} />
        </>
    )
};

export default ArticleContainer;