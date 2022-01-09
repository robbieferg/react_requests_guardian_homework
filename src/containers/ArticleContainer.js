import { useState, useEffect } from "react";
import ArticleList from "../components/ArticleList";
import CategorySelector from "../components/CategorySelector";

const ArticleContainer = () => {
    const [articles, setArticles] = useState([]);
    const [displayedArticles, setDisplayedArticles] = useState([]);


    useEffect(() => {
        getArticles();
    }, []);

    useEffect(() => {
        setDisplayedArticles(articles);
    }, [articles]);

    const getArticles = () => {
        fetch("https://content.guardianapis.com/search?q=brexit&format=json&api-key=test")
        .then(results => results.json())
        .then(data => setArticles(data["response"]["results"]));
    };

   

    const onCategorySelected = (category) => {
        const filteredArticles = articles.filter(article => article["sectionName"] === category);
        setDisplayedArticles(filteredArticles);
    };

    return (
        <>
            <CategorySelector articles={articles} onCategorySelected={onCategorySelected}/>
            <ArticleList displayedArticles={displayedArticles} />
        </>
    )
};

export default ArticleContainer;